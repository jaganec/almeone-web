require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 7071;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration with multiple options
const createTransporter = () => {
    // Check if we have proper Gmail App Password
    if (process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your-16-char-app-password-here' && process.env.SMTP_PASS.length === 16) {
        // Option 1: Gmail with App Password (Recommended)
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    } else {
        // Option 2: Gmail with less secure app access (for testing)
        // Note: This requires "Less secure app access" to be enabled in Gmail
        return nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }
};

// Send email notification
const sendEmailNotification = async (formData) => {
    const transporter = createTransporter();
    
    const mailOptions = {
        from: process.env.SMTP_USER || 'your-email@gmail.com',
        to: 'info@almeone.com',
        subject: `New Contact Form Submission - ${formData.subject || 'General Inquiry'}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #ECAF26; border-bottom: 2px solid #ECAF26; padding-bottom: 10px;">
                    New Contact Form Submission from AlmeOne Website
                </h2>
                
                <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
                    <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
                </div>
                
                <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                    <h3 style="color: #333; margin-top: 0;">Message</h3>
                    <p style="line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #ECAF26; color: black; border-radius: 5px;">
                    <p style="margin: 0;"><strong>AlmeOne Contact System</strong></p>
                    <p style="margin: 5px 0 0 0; font-size: 14px;">
                        Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Qatar' })} (Qatar Time)
                    </p>
                </div>
                
                <div style="margin-top: 15px; padding: 10px; background: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
                    <p style="margin: 0;">This email was automatically generated from the AlmeOne website contact form.</p>
                </div>
            </div>
        `
    };
    
    return await transporter.sendMail(mailOptions);
};

// Development API endpoint for contact form with real email sending
app.post('/api/contact', async (req, res) => {
  console.log('Development API: Contact form submission received', req.body);
  
  try {
    const { name, email, company, subject, message, recaptchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields: name, email, and message are required'
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    // Try to send email notification
    try {
        await sendEmailNotification({
            name,
            email,
            company: company || 'Not specified',
            subject: subject || 'General Inquiry',
            message
        });
        console.log('Email notification sent successfully to info@almeone.com');
        
        res.json({
            success: true,
            message: 'Thank you for your message! We have sent your inquiry to info@almeone.com and will get back to you within 24 hours.'
        });
    } catch (emailError) {
        console.error('Failed to send email notification:', emailError.message);
        
        // If email fails, still return success for better UX but log the error
        res.json({
            success: true,
            message: 'Thank you for your message! We have received your inquiry and will get back to you within 24 hours. (Note: Email configuration needed for actual sending)'
        });
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Development API server is running' });
});

app.listen(port, () => {
  console.log(`Development API server running at http://localhost:${port}`);
});