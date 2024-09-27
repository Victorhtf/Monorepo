export const sentryBaseConfig = {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
    // Adjust this value in production, or use tracesSampler for greater control
    debug: process.env.NODE_ENV === 'development',
    environment: process.env.NODE_ENV,
};