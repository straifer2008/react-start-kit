import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import store, { history, persist } from './store/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<h2>Loading</h2>} persistor={persist}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
