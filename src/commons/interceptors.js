import HttpStatus from 'http-status';

import * as authService from '../services/auth';
import * as tokenService from '../services/token';

import http from '../utils/http';

const RETRY_COUNT_LIMIT = 3;
const TOKEN_EXPIRE = 'Token expired';
const AUTHORIZATION_HEADER = 'Authorization';
const SESSION_EXPIRE = 'Refresh token expired';
const REFRESH_TOKEN_DOESNT_EXIST = 'Invalid refresh token';

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function buildAuthHeader(accessToken) {
  return `Bearer ${accessToken}`;
}

/**
 * Interceptor to add authentication header for all requests.
 *
 * @param {object} request
 * @returns {object}
 */
export function requestInterceptor(request) {
  const accessToken = tokenService.getAccessToken();

  if (accessToken && !request.headers[AUTHORIZATION_HEADER]) {
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
  }

  return request;
}

/**
 * Interceptor to refresh access token.
 *
 * @param {object} error
 * @returns {object}
 */
export async function responseInterceptor(error) {
  if (!error.response) {
    return Promise.reject(error);
  }

  const originalRequest = error.config;

  const { code, message } = error.response.data.error;

  if (code === HttpStatus.UNAUTHORIZED && message === TOKEN_EXPIRE && !originalRequest.__isRetryRequest) {
    originalRequest._retry = true;
    originalRequest.retryCount = isNaN(originalRequest.retryCount) ? 1 : originalRequest.retryCount++;

    const refreshToken = tokenService.getRefreshToken();
    const { data } = await authService.refresh(refreshToken);

    tokenService.setAccessToken(data.accessToken);

    originalRequest.headers[AUTHORIZATION_HEADER] = buildAuthHeader(data.accessToken);

    return http.request(originalRequest);
  }

  if (
    (code === HttpStatus.UNAUTHORIZED && message === SESSION_EXPIRE) ||
    message === REFRESH_TOKEN_DOESNT_EXIST ||
    originalRequest.retryCount > RETRY_COUNT_LIMIT
  ) {
    await authService.logout();
  }

  return Promise.reject(error);
}
