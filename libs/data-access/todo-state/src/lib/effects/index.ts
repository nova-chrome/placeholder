import { all, call } from 'redux-saga/effects';

import { todoPageEnteredEffect } from './todo-page-entered.effect';

export function* todoEffects() {
  yield all([call(todoPageEnteredEffect)]);
}
