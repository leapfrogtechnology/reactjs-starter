import _get from 'lodash/get';

import config from 'config';
import * as toast from './toast';

import * as env from '../constants/env';

import * as errors from '../constants/errors';

const GENERIC_ERROR = 'Oops! Something went wrong';
const NETWORK_ERROR_MESSAGE = 'Please check your internet connection.';

/**
 * Generic error handler to handle error events.
 *
 * @param {object} event
 * @param {{title, message}} options
 */
export function handleError(event, options = {}) {
  if (config.env !== env.PRODUCTION) {
    console.log(event);
  }

  let message = _get(event, 'response.data.error.message', GENERIC_ERROR);

  if (event && event.message === errors.NETWORK_ERROR) {
    message = NETWORK_ERROR_MESSAGE;
  }

  toast.error({
    title: options.title || 'Error',
    message: options.message || message,
  });
}
