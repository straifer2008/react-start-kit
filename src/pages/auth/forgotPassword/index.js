import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as yup from 'yup';
import ForgotPassword from './forgotPassword';

const validator = yup.object().shape({
  email: yup.string().email().required('Required'),
});

const enhance = compose(
  withFormik({
    mapPropsToValues: () => ({ email: '' }),
    validationSchema: validator,
    handleSubmit: (values) => console.log(values),
  }),
);
export default enhance(ForgotPassword);
