import notificationTypes from '../../constants/notificationTypes';
import { notify } from '../../store/ui/operation';
import { userTypes } from '../../store/user';
import { history } from '../../store/store';
import Storage from './Storage';

export default {
  onSuccess: ({
    action, next, response, dispatch,
  }) => {
    let message = `${notificationTypes.success.toUpperCase()}. STATUS: ${response.status}`;

    if (response.data && response.data.message && typeof response.data.message === 'string') {
      message = `${response.data.message}. STATUS: ${response.status}`;
    }

    notify({
      variant: notificationTypes.success,
      message,
    })(dispatch);
    next({
      type: `${action.type}_SUCCESS`,
      payload: response,
    });

    if (action.type === userTypes.REGISTER_REQUEST) {
      history.push('/login');
    }
    if (action.type === userTypes.LOGIN_REQUEST) {
      Storage.set(process.env.REACT_APP_TOKEN_KEY, response.data.token);
    }
  },
  onError: ({
    action, next, error, dispatch,
  }) => {
    let message = `${notificationTypes.error.toUpperCase()}. STATUS: ${error.response.status}`;

    if (error.response && error.response.data) {
      if (typeof error.response.data === 'string') {
        message = `${error.response.data}. STATUS: ${error.response.status}`;
      } else if (error.response.data.error && typeof error.response.data.error === 'string') {
        message = `${error.response.data.error}. STATUS: ${error.response.status}`;
      }
    }
    notify({ variant: notificationTypes.error, message })(dispatch);
    next({
      type: `${action.type}_FAIL`,
      payload: error,
    });
  },
};
