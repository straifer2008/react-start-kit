import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/helpers/stateHelpers';

const reducer = handleActions({
  [types.GET_ESTIMATES]: mergeDeep((action) => action.payload),
}, {});

export default reducer;
