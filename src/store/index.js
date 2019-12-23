import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import ui from './ui';
import user from './user';
import estimates from './estimates';

const uiPersistConfig = { key: 'ui', storage };
const userPersistConfig = { key: 'user', storage };
const estimatesPersistConfig = { key: 'estimates', storage };

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ui: persistReducer(uiPersistConfig, ui),
  user: persistReducer(userPersistConfig, user),
  estimates: persistReducer(estimatesPersistConfig, estimates),
});

export default rootReducer;
