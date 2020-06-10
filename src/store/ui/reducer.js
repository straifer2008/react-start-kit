import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep, mergeIn } from '../../utils/helpers/stateHelpers';

const initialState = {
  notification: null,
};

const reducer = handleActions({
  [types.GET_TOKEN]: mergeDeep((action) => action.payload),
  [types.NOTIFICATION_SHOW]: mergeIn(({ payload }) => ({ notification: payload })),
  [types.NOTIFICATION_HIDE]: mergeIn(() => ({ notification: null })),
}, initialState);

export default reducer;
