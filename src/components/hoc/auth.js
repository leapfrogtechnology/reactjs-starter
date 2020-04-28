import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { setLoggingIn, setIsLoggedIn, setLoggedInUser } from 'actions/data/auth';

import history from 'utils/history';
import { handleError } from 'utils/errorHandler';

import * as routes from 'constants/routes';

import * as authService from 'services/auth';
import * as userService from 'services/user';
import * as tokenService from 'services/token';

/**
 * Auth state Higher Order Component.
 * Use this HOC if you need to use/modify User state.
 */
function withAuthState(WrappedComponent) {
  class Auth extends Component {
    /**
     * Login user and save tokens and user data.
     *
     * @param {string} email
     * @param {string} password
     */
    login = async (email, password) => {
      try {
        const { setLoggingIn, setIsLoggedIn, setLoggedInUser } = this.props;

        setLoggingIn(true);

        const { data: tokens } = await authService.login({ email, password });
        tokenService.persist({ accessToken: tokens.access_token, refreshToken: tokens.refresh_token });

        let { data: user } = await userService.fetchSelf();

        setLoggingIn(false);
        setIsLoggedIn(true);
        setLoggedInUser(user);

        history.push(routes.HOME);
      } catch (err) {
        this.props.setLoggingIn(false);

        handleError(err, {
          title: 'Login Error',
        });
      }
    };

    logout = () => {
      authService.logout(tokenService.getRefreshToken());
      history.push(routes.LOGIN);
    };

    render() {
      return <WrappedComponent {...this.props} login={this.login} logout={this.logout} />;
    }
  }

  const mapStateToProps = state => {
    let { isLoggedIn, isLoggingIn, user } = state.data.auth;

    return {
      isLoggedIn,
      isLoggingIn,
      loggedInUser: user,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setLoggingIn, setIsLoggedIn, setLoggedInUser }, dispatch);
  };

  return connect(mapStateToProps, mapDispatchToProps)(Auth);
}

export { withAuthState };
