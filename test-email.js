require('dotenv').config();
const nodemailer = require('nodemailer');

// Test Gmail App Password configuration
const testEmailConfig = async () => {
    console.log('Testing Gmail App Password configuration...');
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 'not set');
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    
    try {
        // Verify connection
        await transporter.verify();
        console.log('✅ Gmail SMTP connection successful!');
        
        // Send test email
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'info@almeone.com',
            subject: 'Test Email from AlmeOne Contact System',
            html: `
                <h2 style="color: #ECAF26;">AlmeOne Email System Test</h2>
                <p>This is a test email to verify the Gmail App Password configuration.</p>
                <p>If you receive this email, the system is working correctly!</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Qatar' })} (Qatar Time)</p>
            `
        });
        
        console.log('✅ Test email sent successfully!');
        console.log('Message ID:', info.messageId);
        
    } catch (error) {
        console.error('❌ Email configuration error:', error.message);
    }
};

testEmailConfig();