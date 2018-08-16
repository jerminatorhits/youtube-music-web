import { applyMiddleware, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = applyMiddleware(promise(), thunk, createLogger())

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export {
  store,
  persistor
};