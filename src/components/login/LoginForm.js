import React from 'react';
import { Formik } from 'formik';

import loginSchema from 'schemas/login';

const EmailLogin = ({ login }) => (
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
        <div>
          <label htmlFor="">Email</label>
          <input
            autoComplete="username"
            name="email"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="Your Email address"
            type="text"
          />
          {props.errors.email && props.touched.email && <div id="feedback">{props.errors.email}</div>}
        </div>

        <div>
          <label htmlFor="">Password</label>

          <input
            autoComplete="current-password"
            name="password"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="Your Password"
            type="password"
          />
          {props.errors.password && props.touched.password && <div id="feedback">{props.errors.password}</div>}
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    )}
  </Formik>
);

export default EmailLogin;
