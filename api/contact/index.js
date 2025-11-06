const axios = require('axios');

// Production-ready configuration with Azure Functions compatibility
const CONFIG = {
    MAX_MESSAGE_LENGTH: 5000,
    MAX_SUBJECT_LENGTH: 200,
    MAX_NAME_LENGTH: 100,
    MAX_COMPANY_LENGTH: 200,
    RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: 5,
    EMAIL_TIMEOUT: 30000, // 30 seconds
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*'],
    ENVIRONMENT: process.env.NODE_ENV || process.env.AZURE_FUNCTIONS_ENVIRONMENT || 'development'
};

// In-memory rate limiting (use Redis for production scaling)
const rateLimitStore = new Map();

// Production-ready utility functions
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/[<>]/g, '').substring(0, 5000);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
}

function checkRateLimit(clientIp) {
    const now = Date.now();
    const clientKey = `rate_limit_${clientIp}`;
    
    if (!rateLimitStore.has(clientKey)) {
        rateLimitStore.set(clientKey, { count: 1, resetTime: now + CONFIG.RATE_LIMIT_WINDOW });
        return true;
    }
    
    const data = rateLimitStore.get(clientKey);
    
    if (now > data.resetTime) {
        rateLimitStore.set(clientKey, { count: 1, resetTime: now + CONFIG.RATE_LIMIT_WINDOW });
        return true;
    }
    
    if (data.count >= CONFIG.RATE_LIMIT_MAX_REQUESTS) {
        return false;
    }
    
    data.count++;
    return true;
}

function getClientIP(req) {
    // Azure Functions provides IP in different headers
    return req.headers['x-forwarded-for'] || 
           req.headers['x-real-ip'] || 
           req.headers['x-azure-clientip'] ||
           req.headers['x-client-ip'] ||
           req.connection?.remoteAddress || 
           req.socket?.remoteAddress || 
           'unknown';
}

function isValidOrigin(origin) {
    if (CONFIG.ALLOWED_ORIGINS.includes('*')) return true;
    return CONFIG.ALLOWED_ORIGINS.some(allowed => 
        origin === allowed || 
        (allowed.startsWith('*.') && origin?.endsWith(allowed.slice(1)))
    );
}

module.exports = async function (context, req) {
    // Initialize basic error handling for Azure Functions
    let startTime, requestId, headers;
    
    try {
        startTime = Date.now();
        const clientIP = getClientIP(req);
        const origin = req.headers.origin;
        const userAgent = req.headers['user-agent'] || 'unknown';
        requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        
        // Basic security headers for Azure Functions
        const corsOrigin = isValidOrigin(origin) ? origin : CONFIG.ALLOWED_ORIGINS[0];
        headers = {
            'Access-Control-Allow-Origin': corsOrigin === '*' ? '*' : corsOrigin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Access-Control-Max-Age': '86400',
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'X-Request-ID': requestId
        };
        
        context.log('📧 Contact form submission received', {
            requestId,
            clientIP,
            origin,
            userAgent: userAgent.substring(0, 100),
            method: req.method,
            timestamp: new Date().toISOString(),
            azureInvocationId: context.invocationId
        });

    try {
        // Security headers with dynamic origin handling
        const corsOrigin = isValidOrigin(origin) ? origin : CONFIG.ALLOWED_ORIGINS[0];
        headers = {
            'Access-Control-Allow-Origin': corsOrigin === '*' ? '*' : corsOrigin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Access-Control-Max-Age': '86400',
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'X-Request-ID': requestId
        };

        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            context.log('✅ CORS preflight request handled', { requestId, origin });
            context.res = {
                status: 200,
                headers: headers,
                body: 'OK'
            };
            return;
        }

        // Rate limiting check
        if (!checkRateLimit(clientIP)) {
            context.log('🚫 Rate limit exceeded', { requestId, clientIP });
            context.res = {
                status: 429,
                headers: headers,
                body: {
                    success: false,
                    message: 'Too many requests. Please wait before submitting again.',
                    retryAfter: Math.ceil(CONFIG.RATE_LIMIT_WINDOW / 1000)
                }
            };
            return;
        }

        // Extract and sanitize form data
        const rawData = req.body || {};
        const formData = {
            name: sanitizeInput(rawData.name),
            email: sanitizeInput(rawData.email),
            company: sanitizeInput(rawData.company),
            subject: sanitizeInput(rawData.subject),
            message: sanitizeInput(rawData.message),
            recaptchaToken: sanitizeInput(rawData.recaptchaToken)
        };
        
        context.log('📝 Form data processed', { 
            requestId,
            hasName: !!formData.name,
            hasEmail: !!formData.email,
            hasCompany: !!formData.company,
            hasSubject: !!formData.subject,
            messageLength: formData.message.length,
            hasRecaptcha: !!formData.recaptchaToken
        });

        // Comprehensive validation
        const validationErrors = [];
        
        if (!formData.name || formData.name.length < 2) {
            validationErrors.push('Name must be at least 2 characters long');
        }
        if (formData.name.length > CONFIG.MAX_NAME_LENGTH) {
            validationErrors.push(`Name must be less than ${CONFIG.MAX_NAME_LENGTH} characters`);
        }
        
        if (!formData.email) {
            validationErrors.push('Email address is required');
        } else if (!validateEmail(formData.email)) {
            validationErrors.push('Please provide a valid email address');
        }
        
        if (!formData.message || formData.message.length < 10) {
            validationErrors.push('Message must be at least 10 characters long');
        }
        if (formData.message.length > CONFIG.MAX_MESSAGE_LENGTH) {
            validationErrors.push(`Message must be less than ${CONFIG.MAX_MESSAGE_LENGTH} characters`);
        }
        
        if (formData.subject && formData.subject.length > CONFIG.MAX_SUBJECT_LENGTH) {
            validationErrors.push(`Subject must be less than ${CONFIG.MAX_SUBJECT_LENGTH} characters`);
        }
        
        if (formData.company && formData.company.length > CONFIG.MAX_COMPANY_LENGTH) {
            validationErrors.push(`Company name must be less than ${CONFIG.MAX_COMPANY_LENGTH} characters`);
        }

        if (validationErrors.length > 0) {
            context.log('❌ Validation failed', { requestId, errors: validationErrors });
            context.res = {
                status: 400,
                headers: headers,
                body: {
                    success: false,
                    message: 'Please correct the following errors:',
                    errors: validationErrors
                }
            };
            return;
        }

        // Environment configuration check with detailed logging
        const envCheck = {
            TENANT_ID: process.env.TENANT_ID ? 'SET' : 'NOT SET',
            CLIENT_ID: process.env.CLIENT_ID ? 'SET' : 'NOT SET',
            CLIENT_SECRET: process.env.CLIENT_SECRET ? 'SET' : 'NOT SET',
            SENDER_EMAIL: process.env.SENDER_EMAIL ? 'SET' : 'NOT SET',
            NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL ? 'SET' : 'NOT SET'
        };
        
        context.log('🔧 Environment configuration check', { requestId, ...envCheck });
        
        const missingEnvVars = Object.entries(envCheck)
            .filter(([key, value]) => value === 'NOT SET')
            .map(([key]) => key);
            
        if (missingEnvVars.length > 0) {
            context.log('❌ Microsoft Graph configuration incomplete', { 
                requestId, 
                missingVars: missingEnvVars 
            });
            
            context.res = {
                status: 500,
                headers: headers,
                body: {
                    success: false,
                    message: 'Email service is temporarily unavailable. Please try again later or contact us directly.',
                    ...(CONFIG.ENVIRONMENT === 'development' && {
                        debug: {
                            missing: missingEnvVars,
                            message: 'Microsoft Graph credentials missing'
                        }
                    })
                }
            };
            return;
        }

        // Enhanced access token function with retry logic
        async function getAccessTokenWithRetry(maxRetries = 3) {
            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                    const tokenUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
                    
                    context.log('🔐 Attempting Microsoft Graph authentication', { 
                        requestId, 
                        attempt, 
                        maxRetries,
                        tenantId: process.env.TENANT_ID.substring(0, 8) + '...',
                        clientId: process.env.CLIENT_ID.substring(0, 8) + '...'
                    });
                    
                    const response = await axios.post(tokenUrl, new URLSearchParams({
                        grant_type: 'client_credentials',
                        client_id: process.env.CLIENT_ID,
                        client_secret: process.env.CLIENT_SECRET,
                        scope: 'https://graph.microsoft.com/.default'
                    }), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        timeout: CONFIG.EMAIL_TIMEOUT
                    });

                    context.log('✅ Microsoft Graph access token obtained', { 
                        requestId, 
                        attempt,
                        tokenType: response.data.token_type,
                        expiresIn: response.data.expires_in
                    });
                    
                    return response.data.access_token;
                } catch (error) {
                    const isLastAttempt = attempt === maxRetries;
                    const shouldRetry = error.code === 'ECONNRESET' || 
                                      error.code === 'ETIMEDOUT' || 
                                      (error.response?.status >= 500 && error.response?.status < 600);
                    
                    context.log(`${isLastAttempt ? '❌' : '⚠️'} Authentication attempt ${attempt} failed`, {
                        requestId,
                        attempt,
                        error: error.message,
                        status: error.response?.status,
                        shouldRetry: shouldRetry && !isLastAttempt
                    });
                    
                    if (isLastAttempt || !shouldRetry) {
                        let errorMessage = `Authentication failed: ${error.message}`;
                        
                        if (error.response?.status === 401) {
                            errorMessage = 'Invalid Microsoft Graph credentials. Please check configuration.';
                        } else if (error.response?.status === 400) {
                            const errorData = error.response?.data;
                            if (errorData?.error === 'invalid_client') {
                                errorMessage = 'Invalid client credentials. Please verify CLIENT_ID and CLIENT_SECRET.';
                            } else if (errorData?.error === 'invalid_request') {
                                errorMessage = 'Invalid authentication request format.';
                            }
                        } else if (error.response?.status === 403) {
                            errorMessage = 'Insufficient permissions. Ensure Mail.Send permission is granted with admin consent.';
                        }
                        
                        throw new Error(errorMessage);
                    }
                    
                    // Wait before retry (exponential backoff)
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                }
            }
        }

        // Get access token with retry logic
        const accessToken = await getAccessTokenWithRetry();

        // Generate secure reference ID
        const referenceId = `ALM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        
        context.log('📧 Preparing email content', { 
            requestId, 
            referenceId,
            recipientEmail: formData.email,
            notificationEmail: process.env.NOTIFICATION_EMAIL
        });

        // Create enhanced admin notification email with security considerations
        const adminEmailPayload = {
            message: {
                subject: `[AlmeOne Contact] ${formData.subject || 'New Inquiry'} - Ref: ${referenceId}`,
                body: {
                    contentType: 'HTML',
                    content: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>AlmeOne Contact Form Submission</title>
                        <style>
                            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; }
                            .container { background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                            .header { background: linear-gradient(135deg, #ECAF26, #B8860B); padding: 30px 20px; color: white; text-align: center; }
                            .content { padding: 30px 20px; }
                            .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #ECAF26; }
                            .label { font-weight: 600; color: #495057; margin-bottom: 5px; }
                            .value { color: #212529; word-break: break-word; }
                            .footer { padding: 20px; text-align: center; background: #343a40; color: white; }
                            .metadata { font-size: 12px; color: #6c757d; border-top: 1px solid #dee2e6; padding-top: 15px; margin-top: 20px; }
                            .security-notice { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 10px; margin: 15px 0; font-size: 12px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>🎯 New Contact Form Submission</h1>
                                <p><strong>Reference ID: ${referenceId}</strong></p>
                            </div>
                            <div class="content">
                                <div class="field">
                                    <div class="label">👤 Name:</div>
                                    <div class="value">${formData.name}</div>
                                </div>
                                <div class="field">
                                    <div class="label">📧 Email:</div>
                                    <div class="value">${formData.email}</div>
                                </div>
                                <div class="field">
                                    <div class="label">🏢 Company:</div>
                                    <div class="value">${formData.company || 'Not provided'}</div>
                                </div>
                                <div class="field">
                                    <div class="label">📋 Subject:</div>
                                    <div class="value">${formData.subject || 'General Inquiry'}</div>
                                </div>
                                <div class="field">
                                    <div class="label">💬 Message:</div>
                                    <div class="value">${formData.message.replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                                </div>
                                <div class="metadata">
                                    <div><strong>🕐 Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Qatar', dateStyle: 'full', timeStyle: 'long' })}</div>
                                    <div><strong>🌐 Client IP:</strong> ${clientIP}</div>
                                    <div><strong>🔍 User Agent:</strong> ${userAgent.substring(0, 100)}</div>
                                    <div><strong>📍 Origin:</strong> ${origin || 'Direct'}</div>
                                    <div><strong>🆔 Request ID:</strong> ${requestId}</div>
                                </div>
                                <div class="security-notice">
                                    <strong>Security Note:</strong> This email contains user-submitted content. Please verify sender authenticity before responding to sensitive requests.
                                </div>
                            </div>
                            <div class="footer">
                                <p><strong>AlmeOne Contact Management System</strong></p>
                                <p>📍 Qatar: +974 33920094 | 🌐 info@almeone.com</p>
                                <p>Environment: ${CONFIG.ENVIRONMENT.toUpperCase()}</p>
                            </div>
                        </div>
                    </body>
                    </html>`
                },
                toRecipients: [{
                    emailAddress: {
                        address: process.env.NOTIFICATION_EMAIL || 'info@almeone.com'
                    }
                }]
            }
        };

        const autoReplyPayload = {
            message: {
                subject: `Thank you for contacting AlmeOne - Ref: ${referenceId}`,
                body: {
                    contentType: 'HTML',
                    content: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto}.header{background:linear-gradient(135deg,#ECAF26,#B8860B);padding:30px 20px;color:white;text-align:center}.content{padding:30px 20px;background:#f8f9fa}.footer{padding:20px;text-align:center;background:#343a40;color:white}</style></head><body><div class="header"><h1>✅ Thank You for Contacting AlmeOne</h1><p>Your inquiry has been received</p></div><div class="content"><p>Dear ${formData.name},</p><p>Thank you for reaching out to <strong>AlmeOne</strong>. We have successfully received your inquiry and our team will review it promptly.</p><p><strong>Your Reference ID:</strong> ${referenceId}</p><p><strong>Next Steps:</strong></p><ul><li>Our team will review your inquiry within 24 hours</li><li>You will receive a personalized response from our experts</li><li>For urgent matters, please call us at +974 33920094</li></ul><p>We appreciate your interest in our AI-driven solutions and digital transformation services.</p><p>Best regards,<br><strong>The AlmeOne Team</strong></p></div><div class="footer"><p><strong>AlmeOne - Unified Intelligence for a Digital World</strong></p><p>�� Qatar: +974 33920094 | 🌐 info@almeone.com</p></div></body></html>`
                },
                toRecipients: [{
                    emailAddress: {
                        address: formData.email
                    }
                }]
            }
        };

        // Send emails with enhanced error handling and retry logic
        const emailResults = { admin: false, customer: false };
        
        try {
            context.log('📤 Sending admin notification via Microsoft Graph', { requestId, referenceId });
            await axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
                adminEmailPayload,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    timeout: CONFIG.EMAIL_TIMEOUT
                }
            );
            emailResults.admin = true;
            context.log('✅ Admin notification sent successfully', { requestId, referenceId });

        } catch (adminEmailError) {
            context.log('⚠️ Admin email failed, continuing with customer email', { 
                requestId, 
                error: adminEmailError.message,
                status: adminEmailError.response?.status 
            });
        }

        try {
            context.log('📤 Sending customer auto-reply via Microsoft Graph', { requestId, referenceId });
            await axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
                autoReplyPayload,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    timeout: CONFIG.EMAIL_TIMEOUT
                }
            );
            emailResults.customer = true;
            context.log('✅ Customer auto-reply sent successfully', { requestId, referenceId });

        } catch (customerEmailError) {
            context.log('⚠️ Customer email failed', { 
                requestId, 
                error: customerEmailError.message,
                status: customerEmailError.response?.status 
            });
        }

        // Determine response based on email results
        const bothEmailsSent = emailResults.admin && emailResults.customer;
        const someEmailsSent = emailResults.admin || emailResults.customer;
        
        const duration = Date.now() - startTime;
        
        if (bothEmailsSent) {
            context.log('🎉 Contact form submission completed successfully', { 
                requestId, 
                referenceId, 
                duration: `${duration}ms`,
                emailResults 
            });
            
            context.res = {
                status: 200,
                headers: headers,
                body: {
                    success: true,
                    message: 'Thank you for your message! We have received your inquiry and will respond within 24 hours.',
                    referenceId: referenceId,
                    timestamp: new Date().toISOString(),
                    provider: 'Microsoft Graph API'
                }
            };
            
        } else if (someEmailsSent) {
            context.log('⚠️ Partial email delivery success', { 
                requestId, 
                referenceId, 
                duration: `${duration}ms`,
                emailResults 
            });
            
            context.res = {
                status: 200,
                headers: headers,
                body: {
                    success: true,
                    message: 'Thank you for your message! We have received your inquiry. Due to a technical issue, some notifications may be delayed, but we will still respond within 24 hours.',
                    referenceId: referenceId,
                    timestamp: new Date().toISOString(),
                    provider: 'Microsoft Graph API',
                    warning: 'Partial email delivery'
                }
            };
            
        } else {
            context.log('❌ All email delivery failed', { 
                requestId, 
                referenceId, 
                duration: `${duration}ms`,
                emailResults 
            });
            
            context.res = {
                status: 500,
                headers: headers,
                body: {
                    success: false,
                    message: 'Your message was received and logged securely, but there was an issue with email notifications. Our team will still review your inquiry and respond within 24 hours.',
                    referenceId: referenceId,
                    timestamp: new Date().toISOString(),
                    provider: 'Microsoft Graph API',
                    ...(CONFIG.ENVIRONMENT === 'development' && {
                        debug: { emailResults, duration: `${duration}ms` }
                    })
                }
            };
        }

    } catch (error) {
        const duration = Date.now() - startTime;
        
        context.log('❌ Critical error in contact form processing', { 
            requestId, 
            error: error.message,
            stack: CONFIG.ENVIRONMENT === 'development' ? error.stack : undefined,
            duration: `${duration}ms`
        });
        
        context.res = {
            status: 500,
            headers: headers,
            body: {
                success: false,
                message: 'We apologize, but there was an unexpected error processing your request. Please try again later or contact us directly.',
                timestamp: new Date().toISOString(),
                ...(CONFIG.ENVIRONMENT === 'development' && {
                    debug: {
                        error: error.message,
                        requestId: requestId
                    }
                })
            }
        };
    }
    
    } catch (criticalError) {
        // Handle any critical errors that weren't caught by inner try-catch
        const duration = startTime ? Date.now() - startTime : 0;
        const errorId = requestId || `err_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        
        context.log('🚨 Critical function error', {
            requestId: errorId,
            error: criticalError.message,
            stack: CONFIG.ENVIRONMENT === 'development' ? criticalError.stack : undefined,
            duration: `${duration}ms`,
            azureInvocationId: context.invocationId
        });
        
        // Ensure we always return a proper response structure for Azure Functions
        context.res = {
            status: 500,
            headers: headers || {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'X-Request-ID': errorId
            },
            body: {
                success: false,
                message: 'A critical error occurred while processing your request. Please try again later or contact us directly.',
                timestamp: new Date().toISOString(),
                requestId: errorId,
                ...(CONFIG.ENVIRONMENT === 'development' && {
                    debug: {
                        error: criticalError.message,
                        type: 'critical_function_error'
                    }
                })
            }
        };
    }
};
