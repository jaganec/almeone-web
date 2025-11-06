# AlmeOne Contact Form API - Production Deployment Checklist

## 🚀 Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Update `.env.production` with actual production values
- [ ] Verify Microsoft Graph API credentials are valid
- [ ] Test email sending in staging environment
- [ ] Configure proper ALLOWED_ORIGINS for production domains
- [ ] Set up monitoring and logging endpoints

### 2. Security Configuration
- [ ] Enable HTTPS/SSL certificates
- [ ] Configure proper CORS origins (remove wildcard *)
- [ ] Set up rate limiting with Redis for production scaling
- [ ] Implement proper input sanitization
- [ ] Configure security headers (CSP, HSTS, etc.)
- [ ] Enable request logging and monitoring

### 3. Microsoft Graph API Setup
- [ ] Create production Azure App Registration
- [ ] Configure Mail.Send permissions with admin consent
- [ ] Verify sender email exists in Microsoft 365 tenant
- [ ] Test authentication and token acquisition
- [ ] Set up proper error handling and retries

### 4. Performance Optimization
- [ ] Configure email timeout settings
- [ ] Implement connection pooling for HTTP requests
- [ ] Set up caching for static content
- [ ] Enable compression (gzip)
- [ ] Configure proper timeout values

### 5. Monitoring and Alerting
- [ ] Set up application monitoring (Application Insights, New Relic, etc.)
- [ ] Configure error alerting and notifications
- [ ] Implement health check endpoints
- [ ] Set up log aggregation
- [ ] Configure performance monitoring

### 6. Testing
- [ ] End-to-end testing with production-like data
- [ ] Load testing for expected traffic volume
- [ ] Security testing (OWASP top 10)
- [ ] Email delivery testing
- [ ] Error handling and recovery testing

### 7. Backup and Recovery
- [ ] Set up automated backups
- [ ] Test disaster recovery procedures
- [ ] Document rollback procedures
- [ ] Set up redundancy if required

## 🔧 Production Configuration

### Environment Variables Required:
```
NODE_ENV=production
TENANT_ID=<your-production-tenant-id>
CLIENT_ID=<your-production-client-id>
CLIENT_SECRET=<your-production-client-secret>
SENDER_EMAIL=<verified-sender@yourdomain.com>
NOTIFICATION_EMAIL=<notifications@yourdomain.com>
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Security Headers (automatically applied):
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy: (configure based on your needs)

### Rate Limiting (current settings):
- Window: 15 minutes
- Max requests per IP: 5 (adjust for production needs)
- Consider using Redis for distributed rate limiting

## 📊 Monitoring Endpoints

### Health Check
```
GET /api/health
Response: { "status": "Healthy", "timestamp": "..." }
```

### Metrics (if implemented)
```
GET /api/metrics
Response: { "requests": 123, "errors": 2, "uptime": "..." }
```

## 🚨 Error Handling

### Error Types Handled:
1. **Validation Errors**: Client-side form validation failures
2. **Authentication Errors**: Microsoft Graph API authentication issues
3. **Network Errors**: Timeout, connection, and retry logic
4. **Rate Limiting**: Too many requests protection
5. **Server Errors**: Graceful degradation with user-friendly messages

### Error Logging:
- All errors are logged with request IDs for tracing
- Sensitive information is masked in production
- Stack traces only shown in development mode

## 🔐 Security Features

### Input Validation:
- Email format validation
- Content length limits
- HTML/XSS protection through sanitization
- Rate limiting per IP address

### CORS Security:
- Configurable allowed origins
- Proper preflight handling
- Security headers on all responses

### Data Protection:
- No sensitive data stored in logs
- Email content sanitized
- Request tracking with anonymized IPs

## 📈 Performance Features

### Optimization:
- Connection pooling for HTTP requests
- Configurable timeouts
- Retry logic with exponential backoff
- Async email sending (both admin and customer emails)

### Monitoring:
- Request duration tracking
- Success/failure rate monitoring
- Performance metrics collection

## 🛠️ Deployment Commands

### Azure Functions:
```bash
# Install Azure Functions CLI
npm install -g azure-functions-core-tools@4

# Deploy to Azure
func azure functionapp publish your-function-app-name
```

### Express Server:
```bash
# Install dependencies
npm install

# Start production server
NODE_ENV=production node api/server.js
```

### Docker (if containerized):
```bash
# Build container
docker build -t almeone-contact-api .

# Run container
docker run -p 7071:7071 --env-file .env.production almeone-contact-api
```

## 📋 Post-Deployment Verification

### Functional Testing:
- [ ] Submit test contact form
- [ ] Verify admin notification email received
- [ ] Verify customer auto-reply email received
- [ ] Test error handling scenarios
- [ ] Verify rate limiting works

### Performance Testing:
- [ ] Response time under normal load
- [ ] Response time under peak load
- [ ] Memory usage monitoring
- [ ] Error rate monitoring

### Security Testing:
- [ ] CORS policy verification
- [ ] Rate limiting verification
- [ ] Input validation testing
- [ ] Security header verification

## 🆘 Troubleshooting

### Common Issues:
1. **Authentication Errors**: Check Azure App Registration and permissions
2. **Email Delivery Failures**: Verify sender email exists in Microsoft 365
3. **CORS Errors**: Check ALLOWED_ORIGINS configuration
4. **Rate Limiting**: Adjust limits based on traffic patterns
5. **Timeout Errors**: Increase EMAIL_TIMEOUT if needed

### Debug Mode:
Set `NODE_ENV=development` to enable detailed error messages and debug information.

### Support:
- Check logs for detailed error information
- Monitor application metrics
- Review Azure Functions/Express server logs
- Verify Microsoft Graph API status