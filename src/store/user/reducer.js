import { handleActions } from 'redux-actions';
import types from './types';
import { mergeIn } from '../../utils/helpers/stateHelpers';

const reducer = handleActions({
  [types.LOGOUT]: () => {},
  [types.LOGIN_REQUEST_SUCCESS]: mergeIn(({ payload }) => ({
    token: payload.data.token,
  })),
}, {});

export default reducer;
