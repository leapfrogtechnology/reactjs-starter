import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';

/**
 * Persist Auth Reducer.
 */
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});
