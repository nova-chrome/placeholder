import { FindAllTodosRequestParams } from '@placeholder/model/todo';
import { createAction } from '@reduxjs/toolkit';

export const todoPageEntered = createAction<FindAllTodosRequestParams>(
  '[TODO/UI] Todo Page Entered'
);

export const todoTablePaginationChanged =
  createAction<FindAllTodosRequestParams>(
    '[TODO/UI] Todo Table Pagination Changed'
  );
