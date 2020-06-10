import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { userOperation } from '../../../store/user';
import Register from './register';

const mapDispatchToProps = { register: userOperation.register };

const validator = yup.object().shape({
  firstName: yup.string().min(2, 'Min. length 2').required('Required'),
  lastName: yup.string().min(2, 'Min. length 2').required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().min(4, 'Min. length 4').required('Required'),
});

const enhance = compose(
	connect(null, mapDispatchToProps),
  withFormik({
	  mapPropsToValues: () => ({
      firstName: '', lastName: '', email: '', password: '', check: false,
    }),
	  validationSchema: validator,
    handleSubmit: (values, { props: { register } }) => {
	    register({
		    email: values.email,
		    password: values.password,
	    });
    },
  }),
);
export default enhance(Register);
