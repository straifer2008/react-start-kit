import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { userAction } from '../../../store/user';
import Login from './login';

const mapDispatchToProps = { login: userAction.login };

const loginHandler = ({ login }) => ({ email, password }) => login({
  id: 1,
  name: email,
  surName: password,
});

const validator = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withHandlers({ loginUser: loginHandler }),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: validator,
    handleSubmit: (values, { props: { loginUser } }) => loginUser(values),
    displayName: 'LoginForm',
  }),
);
export default enhance(Login);
