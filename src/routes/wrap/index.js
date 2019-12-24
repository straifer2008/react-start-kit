import { compose } from 'recompose';
import { connect } from 'react-redux';
import { userAction } from '../../store/user';
import Wrap from './wrap';

const mapDispatchToProps = { logout: userAction.logout };

const enhance = compose(
  connect(null, mapDispatchToProps),
);
export default enhance(Wrap);
