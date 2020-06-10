import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import Notifications from './notifications';
import { uiAction, uiOperation } from '../../store/ui';

const mapStateToProps = ({ ui: { notification } }) => ({ notification });
const mapDispatchToProps = {
  notify: uiOperation.notify,
  notificationHide: uiAction.notificationHide,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('open', 'setOpen', false),
);
export default enhance(Notifications);
