import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import Employees from './employees';
import _404 from 'components/common/errors/_404';

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={() => <Redirect to={routes.EMPLOYEES} />} />

      <Route path={routes.EMPLOYEES} component={Employees} />

      <Route path="*" component={_404} />
    </Switch>
  );
};

export default HomeRouter;
