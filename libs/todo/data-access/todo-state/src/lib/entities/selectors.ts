import { createSelector } from '@reduxjs/toolkit';

import { todoAdapter, TodoState } from './slice';

const featureSelector = (state: { todos: TodoState }) => state.todos;

const todoSelectors = todoAdapter.getSelectors();

export const selectAll = createSelector(
  featureSelector,
  todoSelectors.selectAll
);

export const selectTotal = createSelector(
  featureSelector,
  (state) => state.total
);
