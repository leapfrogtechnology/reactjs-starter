/**
 * Interceptor to add Access Token header for all requests.
 *
 * @param {object} request
 * @returns {object}
 */
export function requestInterceptor(request) {
  // Add code for request interceptor.

  return request;
}

/**
 * Interceptor to refresh Authorization header.
 *
 * @param {object} error
 * @returns {object}
 */
export async function responseInterceptor(error) {
  // Add code for response interceptor.

  return Promise.reject(error);
}
