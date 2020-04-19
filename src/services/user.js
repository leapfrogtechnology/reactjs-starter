import http from '../utils/http';

import config from '../config';

/**
 * Fetch data of the logged in user.
 *
 * @param {string} accessToken
 * @returns {Promise}
 */
export async function fetchSelf() {
  const url = config.endpoints.users.self;
  const { data } = await http.get(url);

  return data;
}
