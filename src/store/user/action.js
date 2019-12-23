import { createActions } from 'redux-actions';
import types from './types';

export const {
  login,
  logout,
} = createActions(
  types.LOGIN,
  types.LOGOUT,
);
