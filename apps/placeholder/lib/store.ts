import {
  todoEffects,
  todoSlice,
} from '@placeholder/todo/data-access/todo-state';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const rootEffect = function* () {
  yield all([call(todoEffects)]);
};

export const store = configureStore({
  reducer: combineReducers({
    todos: todoSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootEffect);
