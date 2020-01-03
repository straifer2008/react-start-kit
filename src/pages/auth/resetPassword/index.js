import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as yup from 'yup';
import ResetPassword from './resetPassword';

const validator = yup.object().shape({
  password: yup.string().min(4, 'Min length is 4').required('Required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords do not match').required('Password confirmation is required'),
});

const enhance = compose(
  withFormik({
    mapPropsToValues: () => ({ password: '', confirmPassword: '' }),
    validationSchema: validator,
    handleSubmit: (values) => console.log(values),
  }),
);
export default enhance(ResetPassword);
