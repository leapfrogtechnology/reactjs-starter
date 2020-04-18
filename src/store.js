import thunk from 'redux-thunk';
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

export default store;
