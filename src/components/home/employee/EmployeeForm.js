import React from 'react';
import { Formik } from 'formik';
import Alert from 'components/common/alert';

import history from '../../../utils/history';

import { FormGroup, DateSelector, RadioButton } from '../../common/form';
import { EMPLOYEE_ROUTE } from '../../../constants/routes';

import Loading from '../../common/loading/Loading';

import employeeSchema from '../../../schemas/EmployeeSchema';

import { generateReactSelectOptions } from '../../../utils/reactSelect';
import { TYPE_OPTIONS } from '../../../constants/options';
import * as employeeService from 'services/employeeService';
import { handleError } from 'utils/errorHandler';

const genderSelectOptions = generateReactSelectOptions(TYPE_OPTIONS);

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
      loading: false
    };
  }

  componentDidMount() {
    if (this.state.id) {
      // this.fetchById();
    }
  }

  setLoading = loading => {
    this.setState({loading});
  };

  handleSubmit = async employee => {
    try{
      this.setLoading(true);
      await employeeService.save({
        firstName: employee.firstName,
        lastName: employee.lastName,
        dob: employee.dob,
        designation: employee.designation,
        address: employee.address
      });
      this.setLoading(false);
    }catch(err){
      this.setLoading(false);
      handleError(err);
    }
  };

  handleUpdate = async employee => {
    try{
      this.setLoading(true);
      let result = await employeeService.save({
        firstName: employee.firstName, 
        lastName: employee.lastName, 
        designation: employee.designation, 
        dob : employee.dob, 
        address : employee.address
      });
      this.setLoading(false);
    }catch(err){
      this.setLoading(false);
      handleError(err);
    }

  };

  handleDelete = e => {
    e.preventDefault();
    Alert.fire({
      icon: 'warning',
      title: 'Remove this Data',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: async () => {},
    });
  };


  handleChange = e => {
  
  };


  handleBlur = e => {
    
  };

  redirectToDesignation() {
    history.push(EMPLOYEE_ROUTE);
  }

  render() {
    return (
      <Formik
      initialValues={this.state.employee}
      onSubmit={this.handleSubmit}
      validationSchema={employeeSchema}
      >
      {props => {
        const {values,touched,errors,dirty,isSubmitting,handleChange,handleBlur,handleSubmit,handleReset} = props;
        return (
          <main>
            <div className="container">
              <div className="full-scope-card">
                <div className="full-scope-card__header">
                  <div className="table-header">
                    <h3>Employee Form</h3>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="full-scope-card__content">
                    <div className="form-wrap">
                      <div className="form-wrap__row form-wrap__row--no-margin">
                        <div className="form-wrap__col col-sm-12">
                          <div className="form-group"></div>
                            <FormGroup
                              name="firstName"
                              label="First Name"
                              isMandatory={true}
                              value={values.firstName}
                              error={touched.firstName && errors.firstName}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="First Name"
                            />
                            <FormGroup
                              name="lastName"
                              label="Last Name"
                              isMandatory={false}
                              value={values.lastName}
                              error={touched.lastName && errors.lastName}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="Last Name"
                            />
                            <FormGroup
                              name="designation"
                              label="Designation"
                              isMandatory={true}
                              value={values.designation}
                              handleBlur={handleBlur}
                              error={touched.designation && errors.designation}
                              handleChange={handleChange}
                              placeholder="Designation"
                            />

                            <FormGroup
                              name="address"
                              label="Address"
                              isMandatory={true}
                              value={values.address}
                              handleBlur={handleBlur}
                              error={touched.address && errors.address}
                              handleChange={handleChange}
                              placeholder="Address"
                            /> 

                            <DateSelector
                              name="dob"
                              label="Date Of Birth"
                              placeholderText="Pick a birth date"
                              isMandatory={true}
                              value={values.dob}
                              error={touched.dob && errors.dob}
                              handleChange={handleChange}
                            />

                            <button
                              type="submit"
                              disabled={!dirty || isSubmitting}
                              className="btn btn--primary f-left card-button mr-10"
                            >
                              {isSubmitting ? <Loading /> : !this.state.id ? 'Create' : 'Update'}
                            </button>
                            </div>
                          </div>
                        </div>
                      </div>
                </form>
              </div>
            </div>
          </main>
        );
      }}
    </Formik>
    );
  }
}

export default EmployeeForm;
