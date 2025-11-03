const { app } = require('@azure/functions');
const nodemailer = require('nodemailer');
const { createEmailTemplate } = require('./email-templates');

// Production-ready email configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: process.env.NODE_ENV === 'production'
        }
    });
};

// Production-ready email notification system
const sendEmailNotification = async (formData) => {
    const transporter = createTransporter();
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@almeone.com';
    
    // Send notification to admin
    const adminNotification = {
        from: `"AlmeOne Contact System" <${process.env.SMTP_USER}>`,
        to: notificationEmail,
        subject: `[AlmeOne] New Contact: ${formData.subject || 'General Inquiry'}`,
        html: createEmailTemplate({
            type: 'contact_notification',
            data: formData
        })
    };
    
    // Send auto-reply to customer
    const autoReply = {
        from: `"AlmeOne Team" <${process.env.SMTP_USER}>`,
        to: formData.email,
        subject: 'Thank you for contacting AlmeOne - We\'ll be in touch soon!',
        html: createEmailTemplate({
            type: 'auto_reply',
            data: formData
        })
    };
    
    // Send both emails
    const results = await Promise.allSettled([
        transporter.sendMail(adminNotification),
        transporter.sendMail(autoReply)
    ]);
    
    return {
        adminEmail: results[0],
        autoReply: results[1],
        success: results.every(result => result.status === 'fulfilled')
    };
};

// Verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey || !token) return { success: true }; // Skip verification if not configured
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`
    });
    
    return await response.json();
};

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map();

// Input validation and sanitization
const validateAndSanitize = (data) => {
    const errors = [];
    
    // Name validation
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    if (data.name && data.name.length > 100) {
        errors.push('Name must be less than 100 characters');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Valid email address is required');
    }
    
    // Message validation
    if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    if (data.message && data.message.length > 5000) {
        errors.push('Message must be less than 5000 characters');
    }
    
    // Sanitize HTML and potential XSS
    const sanitize = (str) => {
        if (!str) return '';
        return str.replace(/<[^>]*>/g, '').trim();
    };
    
    return {
        isValid: errors.length === 0,
        errors,
        sanitizedData: {
            name: sanitize(data.name),
            email: data.email.toLowerCase().trim(),
            company: sanitize(data.company || ''),
            subject: sanitize(data.subject || ''),
            message: sanitize(data.message)
        }
    };
};

// Rate limiting
const checkRateLimit = (clientIp) => {
    const now = Date.now();
    const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000; // 1 minute
    const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5;
    
    if (!rateLimitStore.has(clientIp)) {
        rateLimitStore.set(clientIp, { count: 1, resetTime: now + windowMs });
        return { allowed: true, remaining: maxRequests - 1 };
    }
    
    const clientData = rateLimitStore.get(clientIp);
    
    if (now > clientData.resetTime) {
        // Reset window
        rateLimitStore.set(clientIp, { count: 1, resetTime: now + windowMs });
        return { allowed: true, remaining: maxRequests - 1 };
    }
    
    if (clientData.count >= maxRequests) {
        return { allowed: false, remaining: 0, resetTime: clientData.resetTime };
    }
    
    clientData.count++;
    rateLimitStore.set(clientIp, clientData);
    return { allowed: true, remaining: maxRequests - clientData.count };
};

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const startTime = Date.now();
        const clientIp = request.headers['x-forwarded-for'] || request.headers['x-real-ip'] || 'unknown';
        
        context.log('Contact form submission received', {
            ip: clientIp,
            userAgent: request.headers['user-agent'],
            timestamp: new Date().toISOString()
        });

        try {
            // Rate limiting check
            const rateLimit = checkRateLimit(clientIp);
            if (!rateLimit.allowed) {
                const resetIn = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
                return {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json',
                        'Retry-After': resetIn.toString(),
                        'X-RateLimit-Remaining': '0'
                    },
                    jsonBody: {
                        success: false,
                        message: `Too many requests. Please try again in ${resetIn} seconds.`,
                        code: 'RATE_LIMITED'
                    }
                };
            }

            const body = await request.json();
            const { name, email, phone, company, subject, message, recaptchaToken } = body;

            // Validate and sanitize input
            const validation = validateAndSanitize({ name, email, company, subject, message });
            if (!validation.isValid) {
                context.log.warn('Validation failed', { errors: validation.errors, ip: clientIp });
                return {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-RateLimit-Remaining': rateLimit.remaining.toString()
                    },
                    jsonBody: {
                        success: false,
                        message: 'Validation failed',
                        errors: validation.errors,
                        code: 'VALIDATION_ERROR'
                    }
                };
            }

            const sanitizedData = validation.sanitizedData;

            // Verify reCAPTCHA token with Google
            if (recaptchaToken) {
                try {
                    const recaptchaResponse = await verifyRecaptcha(recaptchaToken);
                    if (!recaptchaResponse.success) {
                        context.log.warn('reCAPTCHA verification failed:', recaptchaResponse);
                        return {
                            status: 400,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            jsonBody: {
                                success: false,
                                message: 'reCAPTCHA verification failed. Please try again.'
                            }
                        };
                    }
                } catch (recaptchaError) {
                    context.log.error('reCAPTCHA verification error:', recaptchaError);
                    // Continue without blocking the form submission
                }
            }

            // Send email notification with enhanced logging
            let emailResults = null;
            try {
                emailResults = await sendEmailNotification({
                    ...sanitizedData,
                    phone: phone || 'Not provided'
                });
                
                context.log('Email notification sent successfully', {
                    adminEmailStatus: emailResults.adminEmail.status,
                    autoReplyStatus: emailResults.autoReply.status,
                    processingTime: Date.now() - startTime
                });
            } catch (emailError) {
                context.log.error('Failed to send email notification:', {
                    error: emailError.message,
                    stack: emailError.stack,
                    processingTime: Date.now() - startTime
                });
                
                // In production, you might want to queue for retry
                if (process.env.NODE_ENV === 'production') {
                    // TODO: Queue for retry with service bus or storage queue
                }
            }

            // TODO: Store in database if needed
            // await storeContactSubmission({
            //     name,
            //     email,
            //     phone,
            //     company,
            //     message,
            //     submittedAt: new Date().toISOString()
            // });

            // Log successful submission for analytics
            context.log('Contact form submission processed successfully', {
                name: sanitizedData.name,
                email: sanitizedData.email,
                company: sanitizedData.company || 'Not provided',
                subject: sanitizedData.subject || 'General Inquiry',
                messageLength: sanitizedData.message.length,
                hasPhone: !!phone,
                emailSent: emailResults?.success || false,
                processingTime: Date.now() - startTime,
                ip: clientIp,
                timestamp: new Date().toISOString()
            });

            // Generate reference ID for tracking
            const referenceId = `ALM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'X-RateLimit-Remaining': rateLimit.remaining.toString()
                },
                jsonBody: {
                    success: true,
                    message: emailResults?.success 
                        ? 'Thank you for your message! We\'ve sent you a confirmation email and will get back to you within 24 hours.'
                        : 'Thank you for your message! We will get back to you within 24 hours.',
                    referenceId,
                    emailSent: emailResults?.success || false
                }
            };

        } catch (error) {
            const errorId = `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            
            context.log.error('Error processing contact form:', {
                errorId,
                message: error.message,
                stack: error.stack,
                ip: clientIp,
                processingTime: Date.now() - startTime,
                timestamp: new Date().toISOString()
            });
            
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                },
                jsonBody: {
                    success: false,
                    message: 'Internal server error. Please try again later.',
                    errorId: process.env.NODE_ENV === 'development' ? errorId : undefined,
                    code: 'INTERNAL_ERROR'
                }
            };
        }
    }
});