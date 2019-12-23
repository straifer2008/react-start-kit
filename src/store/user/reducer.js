import { handleActions } from 'redux-actions';
import types from './types';
import { mergeIn } from '../../utils/helpers/stateHelpers';

const reducer = handleActions({
  [types.LOGIN]: mergeIn(({ payload }) => payload),
  [types.LOGOUT]: () => {},
}, {});

export default reducer;
