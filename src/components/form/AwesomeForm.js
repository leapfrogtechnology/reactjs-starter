import React from 'react';
import { Formik, Form } from 'formik';
import AwesomeFormSchema from './AwesomeFormSchema';
import Select from './Select';
import TextInput from './TextInput';
import DatePicker from './CustomDatepicker';
import Checkbox from './CheckBox';

const AwesomeForm = () => {
  return (
    <>
      <h1>Sample Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          selectType: '',
        }}
        validationSchema={AwesomeFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div class="form-element">
            <TextInput label="Name" name="firstName" type="text" placeholder="Anish Manandhar" />
          </div>

          <div class="form-element">
            <TextInput label="Email Address" name="email" type="email" placeholder="anishmanandhar@lftechnology.com" />
          </div>

          <div class="form-element">
            <DatePicker name="date" />
          </div>

          <div class="form-element">
            <Select label="Type" name="selectType">
              <option value="">Select a type</option>
              <option value="type_1">Type 1</option>
              <option value="type_2">Type 2</option>
              <option value="type_3">Type 3</option>
              <option value="type_4">Type 4</option>
            </Select>
          </div>

          <div class="form-element">
            <Checkbox name="checkbox">I accept the terms and conditions</Checkbox>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AwesomeForm;
