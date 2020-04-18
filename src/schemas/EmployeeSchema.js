import * as Yup from 'yup';

/**
 * Validation schema rule for Form
 */
const EmployeeSchema = Yup.object().shape({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Must be 15 characters or less'),
  email: Yup.string().email('Invalid email address').required('Required'),
  acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
  selectType: Yup.string().oneOf(['type_1', 'type_2', 'type_3', 'type_4'], 'Invalid Type').required('Required'),
});

export default EmployeeSchema;
