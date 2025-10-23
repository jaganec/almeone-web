const { app } = require('@azure/functions');

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Contact form submission received');

        try {
            const body = await request.json();
            const { name, email, phone, company, message, recaptchaToken } = body;

            // Validate required fields
            if (!name || !email || !message) {
                return {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    jsonBody: {
                        success: false,
                        message: 'Missing required fields: name, email, and message are required'
                    }
                };
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    jsonBody: {
                        success: false,
                        message: 'Invalid email format'
                    }
                };
            }

            // TODO: Verify reCAPTCHA token with Google
            // if (recaptchaToken) {
            //     const recaptchaResponse = await verifyRecaptcha(recaptchaToken);
            //     if (!recaptchaResponse.success) {
            //         return {
            //             status: 400,
            //             jsonBody: {
            //                 success: false,
            //                 message: 'reCAPTCHA verification failed'
            //             }
            //         };
            //     }
            // }

            // TODO: Send email notification using SendGrid or similar
            // await sendEmailNotification({
            //     name,
            //     email,
            //     phone,
            //     company,
            //     message
            // });

            // TODO: Store in database if needed
            // await storeContactSubmission({
            //     name,
            //     email,
            //     phone,
            //     company,
            //     message,
            //     submittedAt: new Date().toISOString()
            // });

            // For now, just log the submission
            context.log('Contact form data:', { 
                name, 
                email, 
                phone: phone || 'Not provided', 
                company: company || 'Not provided',
                messageLength: message.length
            });

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                jsonBody: {
                    success: true,
                    message: 'Thank you for your message! We will get back to you within 24 hours.'
                }
            };

        } catch (error) {
            context.log.error('Error processing contact form:', error);
            
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                },
                jsonBody: {
                    success: false,
                    message: 'Internal server error. Please try again later.'
                }
            };
        }
    }
});