import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm';
import * as employeeService from 'services/employee';

class AddEmployee extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        designation: '',
        address: '',
        dob: '',
      },
    };
  }

  render() {
    let { data } = this.state;
    return <EmployeeForm data={data} />;
  }
}

export default AddEmployee;
