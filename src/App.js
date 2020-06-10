import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Routes from './routes';
import { Notifications } from './components';
import configureStore, { history } from './store/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<h2>Loading</h2>} persistor={persistStore(store)}>
      <ConnectedRouter history={history}>
        <Routes />
        <Notifications />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
