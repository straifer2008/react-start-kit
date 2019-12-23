import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history, persist } from './store/store';
import App from './routes';
import './utils/styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h2>Loading</h2>} persistor={persist}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
