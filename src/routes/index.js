import { compose } from 'recompose';
import { connect } from 'react-redux';
import { userAction } from '../store/user';
import Routes from './routes';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { getUserReq: userAction.getUserReq };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(Routes);
