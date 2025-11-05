# Azure Static Web Apps Environment Variables Setup

## 🚨 **IMPORTANT: Environment Variables Configuration**

Azure Static Web Apps requires environment variables to be configured in the Azure Portal, NOT in GitHub Actions workflow.

## ✅ **Step-by-Step Fix:**

### 1. **Configure in Azure Portal (REQUIRED)**

1. **Go to Azure Portal**: https://portal.azure.com
2. **Navigate to**: Resource Groups → Your Static Web App (`black-meadow-0ecece200`)
3. **Click**: Configuration → Application settings
4. **Add these environment variables** (click "New application setting"):

```
Name: SMTP_USER
Value: muralim2311@gmail.com

Name: SMTP_PASS  
Value: uxzzumnmuovtpyjs

Name: RECAPTCHA_SECRET_KEY
Value: 6LfAevIrAAAAAABqCFw4YH0kmQwKYOYTJ-pNPdI2f

Name: NOTIFICATION_EMAIL
Value: info@almeone.com
```

5. **Click**: Save (at the top)
6. **Wait**: 2-3 minutes for settings to propagate

### 2. **Alternative: Use Azure CLI**

```bash
# Set your app name
APP_NAME="black-meadow-0ecece200"
RESOURCE_GROUP="your-resource-group-name"

# Add environment variables
az staticwebapp appsettings set --name $APP_NAME --setting-names \
  SMTP_USER=muralim2311@gmail.com \
  SMTP_PASS=uxzzumnmuovtpyjs \
  RECAPTCHA_SECRET_KEY=6LfAevIrAAAAAABqCFw4YH0kmQwKYOYTJ-pNPdI2f \
  NOTIFICATION_EMAIL=info@almeone.com
```

## 🔍 **Why GitHub Actions env vars don't work:**

- ✅ **React App**: Environment variables work (embedded at build time)
- ❌ **Azure Functions**: Environment variables from GitHub Actions are NOT passed to runtime
- ✅ **Azure Functions**: Only Azure App Settings are available at runtime

## 🧪 **Testing After Configuration:**

1. Wait 2-3 minutes after saving settings
2. Test contact form at: https://black-meadow-0ecece200.2.azurestaticapps.net/contact
3. Check function logs in Azure Portal for debugging

## 📝 **Verification:**

The contact function will now log environment variable availability:
- ✅ `SMTP_USER: SET`
- ✅ `SMTP_PASS: SET` 
- ✅ `NOTIFICATION_EMAIL: SET`

If still showing "NOT SET", the Azure configuration hasn't propagated yet.