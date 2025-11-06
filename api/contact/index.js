const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
    context.log('Contact form submission received');

    try {
        // CORS headers - Allow both local dev and production domains
        const allowedOrigins = [
            'https://www.almeone.com',
            'https://almeone.com',
            'https://black-meadow-0ecece200.2.azurestaticapps.net',
            'http://localhost:3000',
            'http://localhost:7071'
        ];
        
        const origin = req.headers.origin;
        const allowOrigin = allowedOrigins.includes(origin) ? origin : 'https://www.almeone.com';
        
        const headers = {
            'Access-Control-Allow-Origin': allowOrigin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Access-Control-Max-Age': '86400',
            'Content-Type': 'application/json'
        };

        // Handle preflight request
        if (req.method === 'OPTIONS') {
            context.res = {
                status: 200,
                headers: headers,
                body: 'OK'
            };
            return;
        }

        // Parse request body
        const { name, email, company, subject, message, recaptchaToken } = req.body || {};

        context.log('Form data received:', { name, email, company, subject });

        // Validate required fields
        if (!name || !email || !message) {
            context.res = {
                status: 400,
                headers: headers,
                body: {
                    success: false,
                    message: 'Missing required fields: name, email, and message are required'
                }
            };
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res = {
                status: 400,
                headers: headers,
                body: {
                    success: false,
                    message: 'Invalid email format'
                }
            };
            return;
        }

        // Check SMTP configuration with detailed logging
        context.log('Environment variables check:', {
            SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT SET',
            SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
            NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL ? 'SET' : 'NOT SET',
            NODE_ENV: process.env.NODE_ENV
        });
        
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            context.log.error('SMTP configuration missing - Environment variables not available');
            context.res = {
                status: 500,
                headers: headers,
                body: {
                    success: false,
                    message: 'Email service not configured properly. Environment variables missing.',
                    debug: {
                        smtpUser: process.env.SMTP_USER ? 'available' : 'missing',
                        smtpPass: process.env.SMTP_PASS ? 'available' : 'missing'
                    }
                }
            };
            return;
        }

        // Create email transporter
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Verify SMTP connection
        try {
            await transporter.verify();
            context.log('SMTP connection verified successfully');
        } catch (verifyError) {
            context.log.error('SMTP verification failed:', verifyError);
            context.res = {
                status: 500,
                headers: headers,
                body: {
                    success: false,
                    message: 'Email service connection failed'
                }
            };
            return;
        }

        // Generate reference ID
        const referenceId = `ALM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

        // Create admin notification email
        const adminEmail = {
            from: process.env.SMTP_USER,
            to: process.env.NOTIFICATION_EMAIL || 'info@almeone.com',
            subject: `[AlmeOne Contact] ${subject || 'New Inquiry'} - Ref: ${referenceId}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                    .header { background: linear-gradient(135deg, #ECAF26, #B8860B); padding: 30px 20px; color: white; text-align: center; }
                    .content { padding: 30px 20px; background: #f8f9fa; }
                    .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #ECAF26; }
                    .label { font-weight: bold; color: #495057; }
                    .value { color: #212529; margin-top: 5px; }
                    .footer { padding: 20px; text-align: center; background: #343a40; color: white; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🎯 New Contact Form Submission</h1>
                    <p><strong>Reference ID: ${referenceId}</strong></p>
                </div>
                
                <div class="content">
                    <div class="field">
                        <div class="label">👤 Name:</div>
                        <div class="value">${name}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">📧 Email:</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                    </div>
                    
                    <div class="field">
                        <div class="label">🏢 Company:</div>
                        <div class="value">${company || 'Not provided'}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">📋 Subject:</div>
                        <div class="value">${subject || 'General Inquiry'}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">💬 Message:</div>
                        <div class="value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">🕐 Submitted:</div>
                        <div class="value">${new Date().toLocaleString('en-US', { 
                            timeZone: 'Asia/Qatar',
                            dateStyle: 'full',
                            timeStyle: 'long'
                        })}</div>
                    </div>
                </div>
                
                <div class="footer">
                    <p><strong>AlmeOne Contact Management System</strong></p>
                    <p>📍 Qatar: +974 33920094 | 🌐 info@almeone.com</p>
                </div>
            </body>
            </html>
            `
        };

        // Create customer auto-reply email
        const autoReplyEmail = {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Thank you for contacting AlmeOne - Ref: ${referenceId}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                    .header { background: linear-gradient(135deg, #ECAF26, #B8860B); padding: 30px 20px; color: white; text-align: center; }
                    .content { padding: 30px 20px; background: #f8f9fa; }
                    .footer { padding: 20px; text-align: center; background: #343a40; color: white; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>✅ Thank You for Contacting AlmeOne</h1>
                    <p>Your inquiry has been received</p>
                </div>
                
                <div class="content">
                    <p>Dear ${name},</p>
                    
                    <p>Thank you for reaching out to <strong>AlmeOne</strong>. We have successfully received your inquiry and our team will review it promptly.</p>
                    
                    <p><strong>Your Reference ID:</strong> ${referenceId}</p>
                    
                    <p><strong>Next Steps:</strong></p>
                    <ul>
                        <li>Our team will review your inquiry within 24 hours</li>
                        <li>You will receive a personalized response from our experts</li>
                        <li>For urgent matters, please call us at +974 33920094</li>
                    </ul>
                    
                    <p>We appreciate your interest in our AI-driven solutions and digital transformation services.</p>
                    
                    <p>Best regards,<br><strong>The AlmeOne Team</strong></p>
                </div>
                
                <div class="footer">
                    <p><strong>AlmeOne - Unified Intelligence for a Digital World</strong></p>
                    <p>📍 Qatar: +974 33920094 | 🌐 info@almeone.com</p>
                </div>
            </body>
            </html>
            `
        };

        // Send emails
        try {
            // Send admin notification
            context.log('Sending admin notification...');
            const adminResult = await transporter.sendMail(adminEmail);
            context.log('Admin email sent:', adminResult.messageId);

            // Send customer auto-reply
            context.log('Sending customer auto-reply...');
            const customerResult = await transporter.sendMail(autoReplyEmail);
            context.log('Customer email sent:', customerResult.messageId);

            context.res = {
                status: 200,
                headers: headers,
                body: {
                    success: true,
                    message: 'Thank you for your message! We have received your inquiry and will respond within 24 hours.',
                    referenceId: referenceId
                }
            };

        } catch (emailError) {
            context.log.error('Email sending failed:', emailError);
            
            context.res = {
                status: 500,
                headers: headers,
                body: {
                    success: false,
                    message: emailError,
                    referenceId: referenceId
                }
            };
        }

    } catch (error) {
        context.log.error('Contact form error:', error);
        
        context.res = {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: {
                success: false,
                message: 'An error occurred while processing your request. Please try again.'
            }
        };
    }
};