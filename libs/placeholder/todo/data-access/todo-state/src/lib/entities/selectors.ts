import { getCallStatus } from '@placeholder/shared/model/call-state';
import { createSelector } from '@reduxjs/toolkit';

import { todoAdapter, TodoState } from './slice';

const featureSelector = (state: { todos: TodoState }) => state.todos;

const todoSelectors = todoAdapter.getSelectors();

export const selectAll = createSelector(
  featureSelector,
  todoSelectors.selectAll
);

export const selectCallStatus = createSelector(featureSelector, (state) =>
  getCallStatus(state.callState)
);

export const selectTotal = createSelector(
  featureSelector,
  (state) => state.total
);
