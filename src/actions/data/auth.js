export const SET_LOGGING_IN = 'SET_LOGGING_IN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

/**
 * Action creator for changing loading state for login.
 *
 * @param {boolena} isLoggingIn
 * @returns {object}
 */
export function setLoggingIn(isLoggingIn) {
  return {
    data: isLoggingIn,
    type: SET_LOGGING_IN,
  };
}

/**
 * Action creator for changing logged in state.
 *
 * @param {boolean} isLoggedIn
 * @returns {object}
 */
export function setIsLoggedIn(isLoggedIn) {
  return {
    data: isLoggedIn,
    type: SET_IS_LOGGED_IN,
  };
}

/**
 * Action creator for saving logged in user.
 *
 * @param {object} user
 * @returns {object}
 */
export function setLoggedInUser(user) {
  return {
    data: user,
    type: SET_LOGGED_IN_USER,
  };
}
