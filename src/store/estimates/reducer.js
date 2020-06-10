import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {};

const reducer = handleActions({
  [types.TEST_ADD_NORMALIZE]: ({ payload }) => ({ payload }),
}, initialState);

export default reducer;
