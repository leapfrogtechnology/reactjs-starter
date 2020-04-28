import React from 'react';

import { Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';

import EmployeeList from './list';

const HomeRouter = () => {
  return (
    <Switch>
      <Route path={routes.EMPLOYEES} component={EmployeeList} />
    </Switch>
  );
};

export default HomeRouter;
