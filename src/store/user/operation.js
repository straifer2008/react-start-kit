import types from './types';
import apiUrls from '../../constants/apiUrls';

const login = (data) => ({
  type: types.LOGIN_REQUEST,
  payload: {
    request: { url: apiUrls.login, method: 'POST', data },
  },
});

const register = (data) => ({
  type: types.REGISTER_REQUEST,
  payload: {
    request: { url: apiUrls.register, method: 'POST', data },
  },
});

export {
  login,
  register,
};
