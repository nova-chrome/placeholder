import { FindAllResponse } from '@placeholder/todo/model/todo';
import { createAction } from '@reduxjs/toolkit';

export const todoPageDataFetchedSuccess = createAction<FindAllResponse>(
  '[TODO/UI] Todo Page Data Fetched Success'
);

export const todoPageDataFetchedFailed = createAction<{ error: string }>(
  '[TODO/UI] Todo Page Data Fetched Failed'
);

export const todoTablePaginationChangedSuccess = createAction<FindAllResponse>(
  '[TODO/UI] Todo Table Pagination Changed Success'
);

export const todoTablePaginationChangedFailed = createAction<{ error: string }>(
  '[TODO/UI] Todo Table Pagination Changed Failed'
);
