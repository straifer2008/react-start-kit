import { notificationShow } from './action';

const notify = ({ message, variant }) => (dispatch) => {
  dispatch(notificationShow({ message, variant }));
};

export {
  notify,
};
