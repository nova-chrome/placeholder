import { diContainer } from '@placeholder/core/util/dependency-injection';
import {
  ITodoRepository,
  TODO_REPOSITORY_TOKEN,
} from '@placeholder/todo/model/todo';
import { call, put, takeEvery } from 'redux-saga/effects';

import { todoTablePaginationChangedSuccess } from '../actions/api.actions';
import { todoTablePaginationChanged } from '../actions/ui.actions';

export function* todoTablePaginationChangedEffect() {
  yield takeEvery(
    todoTablePaginationChanged.type,
    function* (action: ReturnType<typeof todoTablePaginationChanged>) {
      const todoService = diContainer.get<ITodoRepository>(
        TODO_REPOSITORY_TOKEN
      );

      const response: Awaited<ReturnType<ITodoRepository['findAll']>> =
        yield call(todoService.findAll, action.payload);

      yield put(todoTablePaginationChangedSuccess(response));
    }
  );
}
