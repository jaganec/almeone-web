# AlmeOne Email Setup Guide

## Current Status
✅ **Email functionality is fully implemented and ready to use!**

When users submit the contact form, an actual email will be sent to `info@almeone.com` with all the form details.

## How It Works

1. **Contact Form Submission**: User fills out the form on `/contact` page
2. **API Processing**: Form data is sent to `/api/contact` endpoint
3. **Email Generation**: System creates a professional HTML email with the inquiry details
4. **Email Delivery**: Email is sent to `info@almeone.com` using SMTP
5. **Confirmation**: User receives success message

## Email Configuration

### For Development (Current Setup)
The development server (`dev-server.js`) is configured to send emails using Gmail SMTP.

### To Enable Actual Email Sending:

1. **Configure Environment Variables** in `.env` file:
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
```

2. **Gmail Setup** (Recommended):
   - Use a Gmail account
   - Enable 2-factor authentication
   - Generate an "App Password" for this application
   - Use the app password in `SMTP_PASS`

3. **Alternative Email Providers**:
   - **Outlook/Hotmail**: Change service to 'hotmail'
   - **Custom SMTP**: Configure host, port, and auth manually
   - **SendGrid/Mailgun**: For production-grade email delivery

## Email Template

The system sends a professional email containing:
- **Contact Details**: Name, email, company, subject
- **Message Content**: Full message with preserved formatting
- **Timestamp**: Qatar timezone (GST)
- **Branding**: AlmeOne gold theme colors
- **System Info**: Automatic generation notice

## API Endpoints

### Development Server
- **URL**: `http://localhost:7071/api/contact`
- **Method**: POST
- **Features**: Real email sending with nodemailer

### Production (Azure Functions)
- **File**: `api/contact.js`
- **Environment**: Azure Functions v4
- **Features**: Full email functionality + reCAPTCHA verification

## Testing the Contact Form

1. **Start Development Server**:
   ```bash
   node dev-server.js
   ```

2. **Start React App**:
   ```bash
   npm start
   ```

3. **Test Form Submission**:
   - Go to `http://localhost:3001/contact`
   - Fill out the contact form
   - Click "Send Message"
   - Check the terminal for email sending status

## Features

✅ **Professional Email Design**: HTML template with AlmeOne branding
✅ **Form Validation**: Required fields and email format validation
✅ **Security**: reCAPTCHA integration (when configured)
✅ **Error Handling**: Comprehensive error management
✅ **User Feedback**: Success/error messages for users
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Qatar Timezone**: Timestamps in local business timezone

## Troubleshooting

### Common Issues:

1. **Email not sending**: 
   - Check SMTP credentials in .env file
   - Verify Gmail app password (not regular password)
   - Check terminal for error messages

2. **"Network Error"**:
   - Ensure development server is running on port 7071
   - Check if `node dev-server.js` is active

3. **Form not submitting**:
   - Check browser console for errors
   - Verify API server is responding at `http://localhost:7071`

### Success Indicators:
- ✅ Form clears after successful submission
- ✅ Green success message appears
- ✅ Email appears in info@almeone.com inbox
- ✅ Terminal shows "Email notification sent successfully"

## Production Deployment

For production deployment:
1. Configure environment variables in your hosting platform
2. Update API endpoint URLs in Contact.tsx
3. Set up proper SMTP service (not Gmail for high volume)
4. Configure reCAPTCHA keys
5. Test email delivery thoroughly

---

**Ready to Use!** 🚀
The contact form is now fully functional and will send real emails to info@almeone.com when properly configured with SMTP credentials.