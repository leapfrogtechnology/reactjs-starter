import * as Sentry from '@sentry/browser';

import config from 'config';

import { PRODUCTION } from 'constants/env';

/**
 * Initialize Sentry.
 */
export function init() {
  if (config.env === PRODUCTION) {
    Sentry.init({ dsn: config.sentryDSN });
  }
}

/**
 * Catch global errors and send the caught error to Sentry.
 *
 * @param {Object} error
 * @param {Object} errorInfo
 */
export function catchErrorsWithScope(error, errorInfo) {
  if (config.env === PRODUCTION) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }
}
