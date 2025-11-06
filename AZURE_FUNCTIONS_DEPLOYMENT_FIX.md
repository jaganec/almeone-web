# Azure Functions Deployment Fix for 500 Errors

## 🚨 Common Issues Causing 500 Errors in Azure Functions

### 1. **Variable Reference Errors**
- ✅ **FIXED**: Changed `${name}` to `${formData.name}` in email templates
- ✅ **FIXED**: Added proper error handling for undefined variables

### 2. **Environment Configuration**
- ✅ **FIXED**: Added Azure Functions environment detection
- ✅ **FIXED**: Updated `local.settings.json` with required settings

### 3. **CORS Configuration**
- ✅ **FIXED**: Updated `host.json` to allow all origins for deployment
- ✅ **FIXED**: Added proper CORS headers in function response

### 4. **Error Handling**
- ✅ **FIXED**: Added comprehensive try-catch wrapper
- ✅ **FIXED**: Ensured all code paths return proper Azure Functions response

## 🔧 Deployment Steps

### Step 1: Update Environment Variables in Azure Portal
```bash
# In Azure Portal > Function App > Configuration > Application settings
TENANT_ID=your-actual-tenant-id
CLIENT_ID=your-actual-client-id  
CLIENT_SECRET=your-actual-client-secret
SENDER_EMAIL=your-actual-sender@domain.com
NOTIFICATION_EMAIL=your-notification@domain.com
NODE_ENV=production
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Step 2: Deploy Updated Code
```bash
# Using Azure Functions Core Tools
func azure functionapp publish your-function-app-name

# Or using VS Code Azure Functions extension
# Right-click on function app > Deploy to Function App
```

### Step 3: Test After Deployment
```bash
# Test the function endpoint
curl -X POST https://your-function-app.azurewebsites.net/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## 🐛 Debugging Azure Functions 500 Errors

### Check Application Insights Logs
1. Go to Azure Portal > Function App > Application Insights
2. Go to Logs and run this query:
```kusto
traces
| where timestamp > ago(1h)
| where severityLevel >= 3
| order by timestamp desc
```

### Check Function Execution Logs
1. Go to Azure Portal > Function App > Functions > contact > Monitor
2. Look for recent invocations and error details

### Check Stream Logs
1. Go to Azure Portal > Function App > Log stream
2. Send a test request and watch real-time logs

## 🔍 Key Fixes Applied

### 1. **Variable Reference Fix**
```javascript
// BEFORE (caused 500 error):
content: `<p>Dear ${name},</p>`

// AFTER (fixed):
content: `<p>Dear ${formData.name},</p>`
```

### 2. **Comprehensive Error Handling**
```javascript
module.exports = async function (context, req) {
    let startTime, requestId, headers;
    
    try {
        // Main function logic
    } catch (criticalError) {
        // Ensure we always return proper response
        context.res = {
            status: 500,
            headers: headers || { 'Content-Type': 'application/json' },
            body: { success: false, message: "Error occurred" }
        };
    }
};
```

### 3. **Azure Functions Environment Detection**
```javascript
const CONFIG = {
    ENVIRONMENT: process.env.NODE_ENV || process.env.AZURE_FUNCTIONS_ENVIRONMENT || 'development'
};
```

### 4. **Enhanced Client IP Detection**
```javascript
function getClientIP(req) {
    return req.headers['x-forwarded-for'] || 
           req.headers['x-azure-clientip'] ||  // Azure-specific header
           req.headers['x-client-ip'] ||
           'unknown';
}
```

## 📋 Pre-Deployment Checklist

- [ ] ✅ All environment variables set in Azure Portal
- [ ] ✅ Microsoft Graph API permissions granted with admin consent
- [ ] ✅ Sender email exists in Microsoft 365 tenant
- [ ] ✅ CORS origins configured for production domains
- [ ] ✅ Function timeout set to 5 minutes in host.json
- [ ] ✅ Application Insights enabled for monitoring

## 🔄 If Still Getting 500 Errors

### 1. Check Specific Error Message
```bash
# View detailed logs in Azure Portal
# Function App > Functions > contact > Monitor > Invocations
```

### 2. Test with Minimal Payload
```json
{
    "name": "Test User",
    "email": "test@example.com", 
    "message": "Test message"
}
```

### 3. Verify Environment Variables
```bash
# In Azure Portal > Function App > Configuration
# Ensure all required variables are set and have valid values
```

### 4. Check Microsoft Graph Permissions
- Mail.Send permission granted
- Admin consent provided
- Sender email is valid Microsoft 365 user

## ⚡ Quick Test Command

```bash
# Replace with your actual Function App URL
curl -X POST "https://your-function-app.azurewebsites.net/api/contact" \
     -H "Content-Type: application/json" \
     -H "Origin: https://yourdomain.com" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "company": "Test Company",
       "subject": "Test Subject", 
       "message": "This is a test message to verify the contact form is working."
     }'
```

Expected successful response:
```json
{
    "success": true,
    "message": "Thank you for your message! We have received your inquiry and will respond within 24 hours.",
    "referenceId": "ALM-1234567890-ABC123",
    "timestamp": "2025-11-06T21:00:00.000Z",
    "provider": "Microsoft Graph API"
}
```