import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Login from './login';
import { userAction } from '../../../store/user';

const mapDispatchToProps = { login: userAction.login };

const loginHandler = ({ login }) => () => {
  login({
    id: 1,
    name: 'Artem',
    surName: 'Oktisyuk',
  });
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withHandlers({ loginHandler }),
);
export default enhance(Login);
