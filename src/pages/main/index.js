import { compose } from 'recompose';
import { connect } from 'react-redux';
import { userAction } from '../../store/user';
import Main from './main';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { logout: userAction.logout };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(Main);
