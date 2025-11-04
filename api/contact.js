const { app } = require('@azure/functions');
const nodemailer = require('nodemailer');

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'contact',
    handler: async (request, context) => {
        context.log('Contact form submission received');

        try {
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json'
            };

            if (request.method === 'OPTIONS') {
                return { status: 200, headers };
            }

            const body = await request.json();
            const { name, email, company, subject, message } = body;

            if (!name || !email || !message) {
                return {
                    status: 400,
                    headers,
                    body: JSON.stringify({
                        success: false,
                        message: 'Missing required fields'
                    })
                };
            }

            const transporter = nodemailer.createTransporter({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            const referenceId = 'ALM-' + Date.now() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();

            const adminEmail = {
                from: process.env.SMTP_USER,
                to: process.env.NOTIFICATION_EMAIL || 'info@almeone.com',
                subject: '[AlmeOne] New Contact: ' + (subject || 'General Inquiry'),
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Reference ID:</strong> ${referenceId}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                    <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                    <p><strong>Message:</strong><br>${message}</p>
                    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                `
            };

            await transporter.sendMail(adminEmail);
            context.log('Email sent successfully');

            return {
                status: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    message: 'Message sent successfully!',
                    referenceId
                })
            };

        } catch (error) {
            context.log.error('Contact form error:', error);
            
            return {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: false,
                    message: 'Failed to send message. Please try again.'
                })
            };
        }
    }
});

module.exports = { app };