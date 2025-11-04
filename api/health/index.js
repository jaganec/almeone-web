module.exports = async function (context, req) {
    context.log('Health check API was called');

    context.res = {
        status: 200,
        body: { status: "Healthy", timestamp: new Date().toISOString() }
    };
};
