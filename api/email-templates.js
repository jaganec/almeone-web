// Production-ready email templates for AlmeOne

const createEmailTemplate = (templateData) => {
    const { type, data } = templateData;
    
    const baseStyle = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
            .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #ECAF26 100%); padding: 30px; text-align: center; }
            .logo { color: #ECAF26; font-size: 28px; font-weight: 700; margin-bottom: 10px; }
            .header-subtitle { color: #ffffff; font-size: 14px; opacity: 0.9; }
            .content { padding: 40px 30px; }
            .contact-card { background: #f8f9fa; border-left: 4px solid #ECAF26; padding: 25px; margin: 20px 0; border-radius: 8px; }
            .message-box { background: #ffffff; border: 1px solid #e1e5e9; padding: 25px; border-radius: 8px; margin: 20px 0; }
            .footer { background: #f8f9fa; padding: 25px 30px; border-top: 1px solid #e1e5e9; }
            .btn { display: inline-block; background: #ECAF26; color: #000000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 0; }
            .priority-high { border-left-color: #dc3545; }
            .priority-medium { border-left-color: #ffc107; }
            .priority-low { border-left-color: #28a745; }
        </style>
    `;

    if (type === 'contact_notification') {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission - AlmeOne</title>
            ${baseStyle}
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="logo">AlmeOne</div>
                    <div class="header-subtitle">AI-Driven Solutions & Warehouse Automation</div>
                </div>
                
                <div class="content">
                    <h2 style="color: #1a1a1a; margin-bottom: 20px; font-size: 24px;">New Contact Form Submission</h2>
                    
                    <div class="contact-card ${getPriorityClass(data.subject)}">
                        <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">Contact Information</h3>
                        <table style="width: 100%; border-spacing: 0;">
                            <tr><td style="padding: 8px 0; font-weight: 600; color: #555; width: 100px;">Name:</td><td style="padding: 8px 0; color: #333;">${data.name}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #ECAF26; text-decoration: none;">${data.email}</a></td></tr>
                            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Company:</td><td style="padding: 8px 0; color: #333;">${data.company || 'Not specified'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Subject:</td><td style="padding: 8px 0; color: #333;">${data.subject || 'General Inquiry'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Priority:</td><td style="padding: 8px 0;"><span style="background: ${getPriorityColor(data.subject)}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${getPriority(data.subject)}</span></td></tr>
                        </table>
                    </div>
                    
                    <div class="message-box">
                        <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">Message</h3>
                        <div style="line-height: 1.7; color: #444; white-space: pre-wrap;">${data.message}</div>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${data.email}?subject=Re: ${data.subject || 'Your inquiry'}&body=Dear ${data.name},%0A%0AThank you for contacting AlmeOne." class="btn">Reply to ${data.name}</a>
                    </div>
                </div>
                
                <div class="footer">
                    <table style="width: 100%; border-spacing: 0;">
                        <tr>
                            <td style="color: #666; font-size: 14px;">
                                <strong>AlmeOne Contact System</strong><br>
                                Submitted: ${new Date().toLocaleString('en-US', { 
                                    timeZone: 'Asia/Qatar',
                                    year: 'numeric',
                                    month: 'long', 
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })} (Qatar Time)
                            </td>
                            <td style="text-align: right;">
                                <img src="https://almeone.com/logos/logo-horizontal-gold-black.png" alt="AlmeOne" style="height: 30px;" />
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e1e5e9; color: #888; font-size: 12px;">
                        This email was automatically generated from the AlmeOne website contact form.<br>
                        Do not reply to this email directly. Use the "Reply" button above or contact ${data.email} directly.
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    }
    
    if (type === 'auto_reply') {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Contacting AlmeOne</title>
            ${baseStyle}
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="logo">AlmeOne</div>
                    <div class="header-subtitle">AI-Driven Solutions & Warehouse Automation</div>
                </div>
                
                <div class="content">
                    <h2 style="color: #1a1a1a; margin-bottom: 20px;">Thank You, ${data.name}!</h2>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 25px;">
                        We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.
                    </p>
                    
                    <div style="background: #f0f8ff; border: 1px solid #ECAF26; border-radius: 8px; padding: 20px; margin: 25px 0;">
                        <h3 style="color: #333; margin-bottom: 10px;">Your Inquiry Details:</h3>
                        <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
                        <p><strong>Reference ID:</strong> ALM-${Date.now()}</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://almeone.com" class="btn">Visit Our Website</a>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h3 style="color: #333; margin-bottom: 15px;">While You Wait...</h3>
                        <ul style="color: #666; line-height: 1.6;">
                            <li>Explore our <a href="https://almeone.com/services" style="color: #ECAF26;">AI Solutions</a></li>
                            <li>Learn about our <a href="https://almeone.com/services" style="color: #ECAF26;">Warehouse Automation</a></li>
                            <li>Follow us on social media for the latest updates</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <strong style="color: #333;">AlmeOne - Qatar Headquarters</strong><br>
                        <span style="color: #666;">West Bay Business District, Doha, Qatar</span><br>
                        <span style="color: #666;">Phone: +974 33920094 | Email: info@almeone.com</span>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    }
};

const getPriority = (subject) => {
    if (!subject) return 'NORMAL';
    const urgentKeywords = ['urgent', 'asap', 'emergency', 'critical', 'immediate'];
    const highKeywords = ['partnership', 'enterprise', 'large', 'urgent'];
    
    const subjectLower = subject.toLowerCase();
    
    if (urgentKeywords.some(keyword => subjectLower.includes(keyword))) return 'URGENT';
    if (highKeywords.some(keyword => subjectLower.includes(keyword))) return 'HIGH';
    return 'NORMAL';
};

const getPriorityColor = (subject) => {
    const priority = getPriority(subject);
    switch (priority) {
        case 'URGENT': return '#dc3545';
        case 'HIGH': return '#ffc107';
        default: return '#28a745';
    }
};

const getPriorityClass = (subject) => {
    const priority = getPriority(subject);
    switch (priority) {
        case 'URGENT': return 'priority-high';
        case 'HIGH': return 'priority-medium';
        default: return 'priority-low';
    }
};

module.exports = { createEmailTemplate };