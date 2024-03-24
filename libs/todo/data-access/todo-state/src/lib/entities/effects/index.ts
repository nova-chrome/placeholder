import { all, call } from 'redux-saga/effects';

import { todoTablePaginationChangedEffect } from './pagination-changed.effect';
import { todoPageEnteredEffect } from './todo-page-entered.effect';

export function* todoEffects() {
  yield all([
    call(todoPageEnteredEffect),
    call(todoTablePaginationChangedEffect),
  ]);
}
