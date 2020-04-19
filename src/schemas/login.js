import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').trim().lowercase().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be atleast 6 characters long')
    .max(20, 'Password must be atmost 20 characters long')
    .required('Password is required'),
});

export default loginSchema;
