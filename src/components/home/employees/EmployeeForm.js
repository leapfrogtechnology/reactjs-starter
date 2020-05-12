import React from 'react';
import { Formik } from 'formik';
import Alert from 'components/common/alert';

import history from 'utils/history';
import * as toast from 'utils/toast';
import * as alert from 'utils/alert';

import { FormGroup, DateSelector, FormSelect } from '../../common/form';
import * as routes from 'constants/routes';

import Loading from 'components/common/loading/Loading';

import employeeSchema from 'schemas/EmployeeSchema';

import * as employeeService from 'services/employee';
import { handleError } from 'utils/errorHandler';
import { DESIGNATION_OPTIONS } from '../../../constants';

const designationOptions = DESIGNATION_OPTIONS.map(designation => {
  return { label: designation, value: designation };
});

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  setLoading = loading => {
    this.setState({ loading });
  };

  handleSubmit = async employee => {
    try {
      this.setLoading(true);
      if (!this.props.id) {
        await employeeService.save(employee);
      } else {
        await employeeService.update(employee);
      }
      this.setLoading(false);
      this.redirectToEmployee();
    } catch (err) {
      this.setLoading(false);
      handleError(err);
    }
  };

  handleCancel = e => {
    e.preventDefault();
    alert.warning({
      title: 'Cancel this Data',
      text: "You won't be able to revert this!",
      buttonText: 'Yes, Cancel it!',
      preConfirm: async () => {
        this.redirectToEmployee();
      },
    });
  };

  fetchById = async () => {
    try {
      const data = await employeeService.fetchById(this.state.id);
      this.setState({
        employee: data,
      });
    } catch (error) {
      toast.error({
        title: 'Error',
        message: error.response.data.error.message,
      });
    }
  };

  redirectToEmployee() {
    history.push(routes.EMPLOYEES);
  }

  render() {
    let { data } = this.props;
    return (
      <Formik enableReinitialize initialValues={data} onSubmit={this.handleSubmit} validationSchema={employeeSchema}>
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldError,
          } = props;
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
                              isMandatory={true}
                              value={values.lastName}
                              error={touched.lastName && errors.lastName}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="Last Name"
                            />
                            <FormSelect
                              name="designation"
                              label="Designation"
                              isMandatory={true}
                              value={values.designation_value}
                              handleBlur={handleBlur}
                              error={touched.designation && errors.designation}
                              handleChange={e => {
                                setFieldValue('designation', e.target.value);
                                setFieldValue('designation_value', { label: e.target.value, value: e.target.value });
                                setFieldError('designation', '');
                              }}
                              options={designationOptions}
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
                              {isSubmitting ? <Loading /> : !this.props.id ? 'Create' : 'Update'}
                            </button>

                            <button type="button" className="btn btn--danger mr-10 f-left" onClick={this.handleCancel}>
                              Cancel
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
