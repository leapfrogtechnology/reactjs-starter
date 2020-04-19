import _get from 'lodash/get';

import config from 'config';
import * as toast from './toast';

import * as env from '../constants/env';

const GENERIC_ERROR = 'Oops! Something went wrong';

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

  toast.error({
    title: options.title || 'Error',
    message: options.message || message,
  });
}
