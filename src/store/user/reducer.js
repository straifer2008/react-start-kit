import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep, mergeIn } from '../../utils/helpers/stateHelpers';

const reducer = handleActions({
  [types.GET_USER_REQ_SUCCESS]: mergeDeep((action) => action.payload),
  [types.GET_USER_REQ_SUCCESS]: () => {},
  [types.GET_USER_REQ_FAIL]: mergeIn((action) => action.payload),
  [types.LOGIN]: mergeIn(({ payload }) => payload),
  [types.LOGOUT]: () => {},
}, {});

export default reducer;
