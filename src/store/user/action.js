import { createActions } from 'redux-actions';
import types from './types';

export const {
  logout,
} = createActions(
  types.LOGOUT,
);
