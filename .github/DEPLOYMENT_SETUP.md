# GitHub Actions Setup Guide for Almeone Website

## 🔐 Required GitHub Secrets

To enable automatic deployment to Azure, you need to add these secrets to your GitHub repository:

### **1. Navigate to Repository Secrets:**
- Go to: https://github.com/jaganec/almeone-web/settings/secrets/actions
- Click "New repository secret"

### **2. Add Required Secrets:**

#### **Azure Deployment Token (REQUIRED)**
```
Name: AZURE_STATIC_WEB_APPS_API_TOKEN
Value: [Your Azure Static Web App deployment token]
```

#### **Environment Variables (OPTIONAL)**
```
Name: REACT_APP_RECAPTCHA_SITE_KEY
Value: [Your Google reCAPTCHA v3 site key]

Name: REACT_APP_API_BASE_URL
Value: https://api.almeone.com (or your API URL)

Name: REACT_APP_GOOGLE_ANALYTICS_ID
Value: [Your Google Analytics tracking ID]
```

## 🚀 How to Get Azure Deployment Token

### **Method 1: Azure Portal**
1. Go to: https://portal.azure.com
2. Navigate to your Static Web App resource
3. Click "Overview" → "Manage deployment token"
4. Copy the token and paste it as `AZURE_STATIC_WEB_APPS_API_TOKEN` secret

### **Method 2: Azure CLI**
```bash
az staticwebapp secrets list \
  --name almeone-website \
  --resource-group almeone-web-rg \
  --query "properties.apiKey" -o tsv
```

## 📋 Workflow Triggers

### **Automatic Deployment Triggers:**
- ✅ Push to `develop` branch → Deploys to staging
- ✅ Push to `main` branch → Deploys to production  
- ✅ Pull Request → Creates preview deployment
- ✅ Push to `feature/azure-deployment-setup` → Deploys for testing

### **Build Process:**
1. **Install Dependencies** - `npm ci --legacy-peer-deps`
2. **Type Checking** - TypeScript compilation
3. **Build Application** - `npm run build` with environment variables
4. **Deploy to Azure** - Automatic deployment with CDN updates
5. **Preview URLs** - Get live preview links

## 🎯 Expected Results

After setup completion:
- **Live Website**: `https://almeone-website-[random].azurestaticapps.net`
- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide
- **Branch Previews**: Each PR gets its own URL
- **Build Notifications**: GitHub status checks

## 🔧 Troubleshooting

### **Common Issues:**
1. **Build Fails**: Check Node.js version compatibility (using 18.x)
2. **Deployment Token Invalid**: Regenerate token in Azure Portal
3. **Environment Variables**: Ensure secrets are properly configured
4. **TypeScript Errors**: Fix compilation errors before deployment

### **Build Logs:**
- **GitHub Actions**: https://github.com/jaganec/almeone-web/actions
- **Azure Portal**: Static Web App → Deployment History