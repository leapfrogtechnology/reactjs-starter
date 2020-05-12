import React from 'react';

import { Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';

import EmployeeAdd from './add';
import EmployeeList from './list';
import EmployeeEdit from './edit';

const EmployeeRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.EMPLOYEES} component={EmployeeList} />
      <Route path={routes.EMPLOYEES_ADD} component={EmployeeAdd} />
      <Route path={routes.EMPLOYEES_EDIT} component={EmployeeEdit} />
    </Switch>
  );
};

export default EmployeeRouter;
