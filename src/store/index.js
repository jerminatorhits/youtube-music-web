import { applyMiddleware, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from '../reducers';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

let middleware = [ promise(), thunk ]
if (process.env.NODE_ENV !== 'production') {
  // middleware = [ ...middleware, createLogger() ]
  middleware = [ ...middleware ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export {
  store,
  persistor
};
