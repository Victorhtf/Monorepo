export interface SentryBaseConfig {
    dsn: string | undefined;
    tracesSampleRate: number;
    debug: boolean;
    environment: string | undefined;
}

export const sentryBaseConfig: SentryBaseConfig;