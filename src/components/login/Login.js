import React from 'react';
import { useTranslation } from 'react-i18next';

import { withAuthState } from 'components/hoc/auth';

import LoginForm from './LoginForm';
import { logoFull } from 'assets/images';

const Login = props => {
  const { login } = props;
  const { t } = useTranslation();

  return (
    <div className="login">
      <div className="login__box-wrap">
        <div className="login__company-logo">
          <img src={logoFull} alt="company-logo" />
        </div>
        <div className="login__form">
          <h3 class="login__form-title">{t('components.login.sign_in.title')}</h3>
          <LoginForm login={login} />
        </div>
      </div>
    </div>
  );
};

export default withAuthState(Login);
