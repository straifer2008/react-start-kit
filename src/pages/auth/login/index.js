import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { userOperation } from '../../../store/user';
import Login from './login';
import apiUrls from '../../../constants/apiUrls';

const mapDispatchToProps = { login: userOperation.login };

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
  withFormik({
    mapPropsToValues: () => ({
      email: apiUrls.defaultCredentials.email,
      password: apiUrls.defaultCredentials.password,
    }),
    validationSchema: validator,
    handleSubmit: (values, { props: { login } }) => {
      login(values);
    },
    displayName: 'LoginForm',
  }),
);
export default enhance(Login);
