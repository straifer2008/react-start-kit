import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import Storage from '../utils/helpers/Storage';
import axiosMiddlewareOptions from '../utils/helpers/axiosMiddlewareOptions';
import reducer from './index';

export const history = createBrowserHistory();

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});
client.interceptors.request.use((config) => {
  const token = Storage.get(process.env.REACT_APP_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

const middleware = applyMiddleware(
  routerMiddleware(history),
  axiosMiddleware(client, axiosMiddlewareOptions),
  thunk,
  logger,
);

const store = function configureStore(initialState) {
  return {
    ...createStore(
      reducer(history),
      initialState,
      composeWithDevTools(middleware),
    ),
  };
};

export default store;
