import React, { Component } from 'react';

import { withAuthState } from 'components/hoc/auth';

import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    const { login } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <LoginForm login={login} />
        </div>
      </div>
    );
  }
}

export default withAuthState(Login);
