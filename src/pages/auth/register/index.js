import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as yup from 'yup';
import Register from './register';

const validator = yup.object().shape({
  firstName: yup.string().min(2, 'Min. length 2').required('Required'),
  lastName: yup.string().min(2, 'Min. length 2').required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().min(4, 'Min. length 4').required('Required'),
});

const enhance = compose(
  withFormik({
	  mapPropsToValues: () => ({
      firstName: '', lastName: '', email: '', password: '', check: false,
    }),
	  validationSchema: validator,
    handleSubmit: (values) => console.log(values),
  }),
);
export default enhance(Register);
