const { app } = require('@azure/functions');

app.http('health', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Health check endpoint called');

        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            jsonBody: {
                status: 'healthy',
                timestamp: new Date().toISOString(),
                version: '1.0.0',
                environment: process.env.AZURE_FUNCTIONS_ENVIRONMENT || 'development',
                uptime: process.uptime(),
                api: {
                    contact: 'available',
                    health: 'available'
                }
            }
        };
    }
});