import http from '../utils/http';

import config from '../config';

import queryString from 'query-string';

/**
 * Fetch data based on page number and page limit
 * @param {string} url
 * @param {int} page
 * @param {int} limit
 * @returns {Promise}
 */
export async function fetchPaginationData(url, page, limit, options) {
  const urlWithQueryString = url + '?' + queryString.stringify({ _page: page, _limit: limit });

  const data = await http.get(urlWithQueryString, {
    params: {
      firstName_like: options.firstName,
    },
  });

  return data;
}
