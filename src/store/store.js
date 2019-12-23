import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddlewareOptions from '../utils/helpers/axiosMiddlewareOptions';
import reducer from './index';

const history = createBrowserHistory();

const client = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});
client.interceptors.request.use((config) => {
  const token = localStorage.getItem(process.env.TOKEN_NAME);

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(
    // Middleware
    routerMiddleware(history),
    axiosMiddleware(client, axiosMiddlewareOptions),
    logger,
  )),
);

const persist = persistStore(store);

export { history, persist };

export default store;
