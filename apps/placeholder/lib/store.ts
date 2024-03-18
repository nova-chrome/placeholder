import {
  combineReducers,
  configureStore,
  createReducer,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const rootEffect = function* () {
  yield all([]);
};

export const store = configureStore({
  reducer: combineReducers({
    test: createReducer({}, (wat) => wat),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootEffect);
