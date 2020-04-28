import http from 'utils/http';

import config from 'config';

import * as tokenService from './token';

/**
 * Send http request for login.
 *
 * @param {{email, password}} payload
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export async function login({ email, password }) {
  const url = config.endpoints.auth.login;
  const { data } = await http.post(url, {
    email,
    password,
  });

  return data;
}

/**
 * Log out of the system.
 *
 * @param {string} refreshToken
 */
export async function logout(refreshToken) {
  tokenService.clear();
}

/**
 * Refresh access token.
 *
 * @param {string} refreshToken
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export async function refresh(refreshToken) {
  const url = config.endpoints.refresh;

  const { data } = await http.post(url, { refreshToken });

  return data;
}
