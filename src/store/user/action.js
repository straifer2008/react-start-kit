import { createActions } from 'redux-actions';
import types from './types';

export const {
  getUserReq,
  login,
  logout,
} = createActions(
  types.GET_USER_REQ,
  types.LOGIN,
  types.LOGOUT,
);
