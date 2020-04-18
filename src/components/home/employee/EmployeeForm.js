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

const genderSelectOptions = generateReactSelectOptions(TYPE_OPTIONS);

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: { name: '', description: '', status: true },
      //id: props
    };
  }

  componentDidMount() {
    if (this.state.id) {
      // this.fetchById();
    }
  }

  handleSubmit = async employee => {};

  handleUpdate = async employee => {};

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

  redirectToDesignation() {
    history.push(EMPLOYEE_ROUTE);
  }

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={this.state.employee}
        validationSchema={employeeSchema}
        onSubmit={!this.state.id ? this.handleSubmit : this.handleUpdate}
        render={({ values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <main>
            <div className="container">
              <div className="full-scope-card">
                <div className="full-scope-card__header">
                  <div className="table-header">
                    <h3>Employee Form</h3>
                  </div>
                </div>
                <form>
                  <div className="full-scope-card__content">
                    <div className="form-wrap">
                      <div className="form-wrap__row form-wrap__row--no-margin">
                        <div className="form-wrap__col col-sm-6">
                          <div className="form-group">
                            <FormGroup
                              name="name"
                              label="Employee Name"
                              isMandatory={true}
                              value={values.name}
                              error={touched.name && errors.name}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="Employee Name"
                            />
                            <FormGroup
                              name="description"
                              label="Sample Description"
                              isMandatory={false}
                              value={values.description}
                              error={touched.description && errors.description}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="Sample Description"
                            />
                            <FormGroup
                              name="username"
                              label="Employee Email"
                              isMandatory={true}
                              value={values.username}
                              handleBlur={handleBlur}
                              error={touched.username && errors.username}
                              handleChange={handleChange}
                              placeholder="Employee Email"
                            />

                            <RadioButton
                              name="gender"
                              label="Option"
                              isMandatory={true}
                              selectedValue={values.gender}
                              selectOptions={genderSelectOptions}
                              error={touched.gender && errors.gender}
                              handleChange={handleChange}
                            />

                            <DateSelector
                              name="dateofBirth"
                              label="Date Of Birth"
                              placeholderText="Pick a birth date"
                              isMandatory={true}
                              value={values.dateofBirth}
                              error={touched.dateofBirth && errors.dateofBirth}
                              handleChange={handleChange}
                            />

                            <button
                              type="button"
                              disabled={isSubmitting}
                              className="btn btn--primary f-left card-button mr-10"
                              onClick={handleSubmit}
                            >
                              {isSubmitting ? <Loading /> : !this.state.id ? 'Create' : 'Update'}
                            </button>
                            <button type="button" className="btn btn--danger mr-10 f-left" onClick={this.handleDelete}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        )}
      ></Formik>
    );
  }
}

export default EmployeeForm;
