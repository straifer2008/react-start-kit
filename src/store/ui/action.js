import { createActions } from 'redux-actions';
import types from './types';

export const {
  notificationShow,
  notificationHide,
} = createActions(
  types.NOTIFICATION_SHOW,
  types.NOTIFICATION_HIDE,
);
