import React from 'react';

import { Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';

// import EmployeeAdd from './add';
import EmployeeList from './list';

const EmployeeRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.EMPLOYEES} component={EmployeeList} />

      {/* <Route path={routes.EMPLOYEES_ADD} component={EmployeeAdd} /> */}
    </Switch>
  );
};

export default EmployeeRouter;
