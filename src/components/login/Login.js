import React, { Component } from 'react';

import { withAuthState } from 'components/hoc/auth';

import LoginForm from './LoginForm';
import { logoFull } from 'assets/images';

class Login extends Component {
  render() {
    const { login } = this.props;

    return (
      <div className="login">
        <div className="login__box-wrap">
          <div className="login__company-logo">
            <img src={logoFull} alt="company-logo" />
          </div>
          <div className="login__form">
            <h3 class="login__form-title">Sign In</h3>
            <LoginForm login={login} />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthState(Login);
