import './public.js';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { StrictMode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import App from './components/App';

import init from './init';

init();

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);
