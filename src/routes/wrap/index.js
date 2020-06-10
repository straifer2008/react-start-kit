import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { userAction } from '../../store/user';
import Wrap from './wrap';
import Storage from '../../utils/helpers/Storage';

const mapDispatchToProps = { logout: userAction.logout };

const logoutHandler = ({ logout }) => () => {
  logout();
  Storage.remove(process.env.REACT_APP_TOKEN_KEY);
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withHandlers({ logoutHandler }),
);
export default enhance(Wrap);
