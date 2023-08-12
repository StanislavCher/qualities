import * as Sentry from "@sentry/react";

function init () {
    Sentry.init({
        dsn: "https://b05ff765359c4d08221e55344191d50c@o4505665466990592.ingest.sentry.io/4505665483767808",
        integrations: [
            new Sentry.BrowserTracing({
                // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
                tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
            }),
            new Sentry.Replay(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

function log(error){
    Sentry.captureException(error)
}

const logger = {
    init,
    log
}

export default logger