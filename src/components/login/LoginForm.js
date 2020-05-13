import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import loginSchema from 'schemas/login';
import Input from 'components/common/input';

function loginFormBuilder(translate) {
  return [
    {
      id: 'email',
      labelText: translate('components.login_form.label.email'),
      name: 'email',
      placeholder: translate('components.login_form.placeholder.email'),
      isRequired: true,
    },
    {
      id: 'password',
      labelText: translate('components.login_form.label.password'),
      name: 'password',
      placeholder: translate('components.login_form.placeholder.password'),
      isRequired: true,
    },
  ];
}

const EmailLogin = ({ login }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={values => {
        const { email, password } = values;

        login(email, password);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          {loginFormBuilder(t).map(formField => (
            <div key={`login-form-${formField.id}`}>
              <Input
                id={formField.id}
                name={formField.name}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                labelText={formField.labelText}
                required={formField.isRequired}
                placeholder={formField.placeholder}
                error={
                  !!(props.errors[formField.name] && props.touched[formField.name] && props.errors[formField.name])
                }
              />
            </div>
          ))}
          <div>
            <button type="submit" className="btn btn--secondary btn--block">
              {t('components.login.sign_in.title')}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default EmailLogin;
