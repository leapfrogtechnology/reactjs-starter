import * as Yup from 'yup';

/**
 * Validation schema rule for employee form
 */
const EmployeeSchema = Yup.object().shape({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  designation: Yup.string().min(2, 'Must be 2 characters or more').required('Required'),
});

export default EmployeeSchema;
