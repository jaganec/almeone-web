# Almeone API Documentation

## Overview
This directory contains Azure Functions that power the Almeone website backend API.

## API Endpoints

### Health Check
- **Endpoint**: `GET /api/health`
- **Purpose**: Check API health status and availability
- **Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-10-23T20:00:00.000Z",
  "version": "1.0.0",
  "environment": "production",
  "uptime": 12345,
  "api": {
    "contact": "available",
    "health": "available"
  }
}
```

### Contact Form Submission
- **Endpoint**: `POST /api/contact`
- **Purpose**: Handle contact form submissions from the website
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "company": "Example Corp",
  "subject": "Project Inquiry", 
  "message": "I'm interested in your services...",
  "recaptchaToken": "optional_recaptcha_token"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you within 24 hours."
}
```

## Development Setup

### Prerequisites
- Node.js 18+
- Azure Functions Core Tools
- Azure CLI (for deployment)

### Local Development
```bash
cd api
npm install
npm start
```

### Testing Endpoints
```bash
# Health check
curl http://localhost:7071/api/health

# Contact form (example)
curl -X POST http://localhost:7071/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "message": "Test message"
  }'
```

## Deployment
API functions are automatically deployed with the main application via GitHub Actions.

## Security Features
- Input validation for all endpoints
- Email format validation
- reCAPTCHA v3 integration (ready for implementation)
- Error handling and logging
- Rate limiting (handled by Azure Functions)

## Future Enhancements
- [ ] Email notifications via SendGrid
- [ ] Database storage for form submissions
- [ ] reCAPTCHA verification implementation
- [ ] Additional API endpoints as needed