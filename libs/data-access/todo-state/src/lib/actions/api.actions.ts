import { Todo } from '@placeholder/model/todo';
import { createAction } from '@reduxjs/toolkit';

export const todoPageDataFetchedSuccess = createAction<Todo[]>(
  '[TODO/UI] Todo Page Data Fetched Success'
);

export const todoPageDataFetchedFailed = createAction<{ error: string }>(
  '[TODO/UI] Todo Page Data Fetched Failed'
);
