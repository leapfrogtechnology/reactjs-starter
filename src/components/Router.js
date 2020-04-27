import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';

import * as routes from 'constants/routes';

import Home from './home';
import Login from './login';

import PrivateRoute from './common/routes/PrivateRoute';

// Top level application router.
const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.LOGIN} component={Login} />
      <PrivateRoute path={routes.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
