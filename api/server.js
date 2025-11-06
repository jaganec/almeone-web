// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 7071;

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:3000', 'https://localhost:3000'],
  credentials: false
}));

// Parse JSON bodies
app.use(express.json());

// Contact endpoint with Microsoft Graph API
app.post('/api/contact', async (req, res) => {
  console.log('Contact form submission received - Microsoft Graph API');

  try {
    const { name, email, company, subject, message, recaptchaToken } = req.body || {};

    console.log('Form data received:', { name, email, company, subject });

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Check Microsoft Graph configuration
    console.log('Environment variables check:', {
      TENANT_ID: process.env.TENANT_ID ? 'SET' : 'NOT SET',
      CLIENT_ID: process.env.CLIENT_ID ? 'SET' : 'NOT SET',
      CLIENT_SECRET: process.env.CLIENT_SECRET ? 'SET' : 'NOT SET',
      SENDER_EMAIL: process.env.SENDER_EMAIL ? 'SET' : 'NOT SET',
      NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL ? 'SET' : 'NOT SET'
    });
    
    if (!process.env.TENANT_ID || !process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.SENDER_EMAIL) {
      console.error('Microsoft Graph configuration missing');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured properly. Microsoft Graph credentials missing.',
        debug: {
          tenantId: process.env.TENANT_ID ? 'available' : 'missing',
          clientId: process.env.CLIENT_ID ? 'available' : 'missing',
          clientSecret: process.env.CLIENT_SECRET ? 'available' : 'missing',
          senderEmail: process.env.SENDER_EMAIL ? 'available' : 'missing'
        }
      });
    }

    // Function to get Microsoft Graph access token
    async function getAccessToken() {
      try {
        const tokenUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
        
        console.log('Attempting to get Microsoft Graph access token...');
        console.log('Token URL:', tokenUrl);
        console.log('Client ID:', process.env.CLIENT_ID ? `${process.env.CLIENT_ID.substring(0, 8)}...` : 'NOT SET');
        
        const response = await axios.post(tokenUrl, new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default'
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        return response.data.access_token;
      } catch (error) {
        console.error('Access token request failed:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          message: error.message
        });
        
        let errorMessage = `Failed to get access token: ${error.message}`;
        
        if (error.response?.status === 401) {
          errorMessage = `Authentication failed (401): Invalid client credentials. Please check your TENANT_ID, CLIENT_ID, and CLIENT_SECRET in the .env file.`;
        } else if (error.response?.status === 400) {
          const errorData = error.response?.data;
          if (errorData?.error === 'invalid_client') {
            errorMessage = `Invalid client (400): The CLIENT_ID or CLIENT_SECRET is incorrect, or the app registration doesn't exist.`;
          } else if (errorData?.error === 'invalid_request') {
            errorMessage = `Invalid request (400): Check that all required parameters are provided correctly.`;
          } else {
            errorMessage = `Bad request (400): ${errorData?.error_description || error.message}`;
          }
        } else if (error.response?.status === 403) {
          errorMessage = `Forbidden (403): The application may not have the required permissions. Ensure Mail.Send permission is granted and admin consent is provided.`;
        }
        
        throw new Error(errorMessage);
      }
    }

    // Get access token
    const accessToken = await getAccessToken();
    console.log('Microsoft Graph access token obtained successfully');

    // Generate reference ID
    const referenceId = `ALM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Create admin notification email
    const adminEmailPayload = {
      message: {
        subject: `[AlmeOne Contact] ${subject || 'New Inquiry'} - Ref: ${referenceId}`,
        body: {
          contentType: 'HTML',
          content: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto}.header{background:linear-gradient(135deg,#ECAF26,#B8860B);padding:30px 20px;color:white;text-align:center}.content{padding:30px 20px;background:#f8f9fa}.field{margin-bottom:15px;padding:15px;background:white;border-radius:5px;border-left:4px solid #ECAF26}.label{font-weight:bold;color:#495057}.value{color:#212529;margin-top:5px}.footer{padding:20px;text-align:center;background:#343a40;color:white}</style></head><body><div class="header"><h1>🎯 New Contact Form Submission</h1><p><strong>Reference ID: ${referenceId}</strong></p></div><div class="content"><div class="field"><div class="label">👤 Name:</div><div class="value">${name}</div></div><div class="field"><div class="label">📧 Email:</div><div class="value">${email}</div></div><div class="field"><div class="label">🏢 Company:</div><div class="value">${company || 'Not provided'}</div></div><div class="field"><div class="label">📋 Subject:</div><div class="value">${subject || 'General Inquiry'}</div></div><div class="field"><div class="label">💬 Message:</div><div class="value">${message.replace(/\n/g, '<br>')}</div></div><div class="field"><div class="label">🕐 Submitted:</div><div class="value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Qatar', dateStyle: 'full', timeStyle: 'long' })}</div></div></div><div class="footer"><p><strong>AlmeOne Contact Management System</strong></p><p>📍 Qatar: +974 33920094 | 🌐 info@almeone.com</p></div></body></html>`
        },
        toRecipients: [{
          emailAddress: {
            address: process.env.NOTIFICATION_EMAIL || 'info@almeone.com'
          }
        }]
      }
    };

    // Create customer auto-reply email
    const autoReplyPayload = {
      message: {
        subject: `Thank you for contacting AlmeOne - Ref: ${referenceId}`,
        body: {
          contentType: 'HTML',
          content: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto}.header{background:linear-gradient(135deg,#ECAF26,#B8860B);padding:30px 20px;color:white;text-align:center}.content{padding:30px 20px;background:#f8f9fa}.footer{padding:20px;text-align:center;background:#343a40;color:white}</style></head><body><div class="header"><h1>✅ Thank You for Contacting AlmeOne</h1><p>Your inquiry has been received</p></div><div class="content"><p>Dear ${name},</p><p>Thank you for reaching out to <strong>AlmeOne</strong>. We have successfully received your inquiry and our team will review it promptly.</p><p><strong>Your Reference ID:</strong> ${referenceId}</p><p><strong>Next Steps:</strong></p><ul><li>Our team will review your inquiry within 24 hours</li><li>You will receive a personalized response from our experts</li><li>For urgent matters, please call us at +974 33920094</li></ul><p>We appreciate your interest in our AI-driven solutions and digital transformation services.</p><p>Best regards,<br><strong>The AlmeOne Team</strong></p></div><div class="footer"><p><strong>AlmeOne - Unified Intelligence for a Digital World</strong></p><p>📍 Qatar: +974 33920094 | 🌐 info@almeone.com</p></div></body></html>`
        },
        toRecipients: [{
          emailAddress: {
            address: email
          }
        }]
      }
    };

    // Send emails using Microsoft Graph API
    try {
      console.log('Sending admin notification via Microsoft Graph...');
      await axios.post(
        `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
        adminEmailPayload,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Admin email sent successfully via Microsoft Graph');

      console.log('Sending customer auto-reply via Microsoft Graph...');
      await axios.post(
        `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
        autoReplyPayload,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Customer email sent successfully via Microsoft Graph');

      res.json({
        success: true,
        message: 'Thank you for your message! We have received your inquiry and will respond within 24 hours.',
        referenceId: referenceId,
        emailProvider: 'Microsoft Graph API'
      });

    } catch (emailError) {
      console.error('Microsoft Graph email sending failed:', emailError.response?.data || emailError.message);
      
      let errorMessage = 'Your message was received but there was an issue sending the email notification. We will still respond to your inquiry.';
      let debugInfo = emailError.response?.data?.error?.message || emailError.message;
      
      // Provide specific guidance for common errors
      if (emailError.response?.data?.error?.code === 'ErrorInvalidUser') {
        errorMessage = 'Email service configuration error: The sender email address is not valid in the Microsoft 365 tenant.';
        debugInfo = `The email address '${process.env.SENDER_EMAIL}' is not a valid user in your Azure AD tenant. Please update the SENDER_EMAIL in your .env file to use an actual user email from your Microsoft 365 organization.`;
      }
      
      res.status(500).json({
        success: false,
        message: errorMessage,
        referenceId: referenceId,
        error: debugInfo,
        troubleshooting: emailError.response?.data?.error?.code === 'ErrorInvalidUser' ? 
          'Update SENDER_EMAIL in .env file to a valid Microsoft 365 user email address' : 
          'Check Microsoft Graph API configuration and permissions'
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while processing your request'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check API was called');
  res.json({ status: "Healthy", timestamp: new Date().toISOString() });
});

// Handle preflight requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Contact API server running on http://localhost:${PORT}`);
  console.log('📧 Microsoft Graph API email system active');
  console.log('🌐 CORS enabled for localhost:3000');
});