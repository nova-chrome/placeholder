import { diContainer } from '@placeholder/core/dependency-injection';
import {
  ITodoRepository,
  TODO_REPOSITORY_TOKEN,
} from '@placeholder/model/todo';
import { call, put, takeEvery } from 'redux-saga/effects';

import { todoPageDataFetchedSuccess } from '../actions/api.actions';
import { todoPageEntered } from '../actions/ui.actions';

export function* todoPageEnteredEffect() {
  yield takeEvery(
    todoPageEntered.type,
    function* (action: ReturnType<typeof todoPageEntered>) {
      const todoService = diContainer.get<ITodoRepository>(
        TODO_REPOSITORY_TOKEN
      );

      const response: Awaited<ReturnType<ITodoRepository['findAll']>> =
        yield call(todoService.findAll, action.payload);

      yield put(todoPageDataFetchedSuccess(response));
    }
  );
}
