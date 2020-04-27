import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';
import EmployeeForm from './employee/EmployeeForm';
import EmployeeList from './employee/EmployeeList';

/**
 * 
 * @param {*} props 
 */
const HomeRouter = (props) => {
  const { user } = props;
  
  return (
    <Switch>
      <Route exact path={routes.EMPLOYEE_ROUTE} component={EmployeeList} />
      <Route exact path={routes.EMPLOYEE_ADD_ROUTE} component={EmployeeForm} />
      <Route path={routes.HOME} component={EmployeeList} />
      <Redirect to={routes.HOME} />
    </Switch>
  );
};

export default HomeRouter;
