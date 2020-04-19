import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { compose, createStore, applyMiddleware } from 'redux';

import * as env from 'constants/env';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.REACT_APP_ENV !== env.PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

const persistor = persistStore(store);

export default store;
export { persistor };
