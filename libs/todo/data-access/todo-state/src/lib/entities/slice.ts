import { Todo } from '@placeholder/todo/model';
import { CallState, LoadingState } from '@placeholder/shared/model/call-state';
import {
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  EntityState,
  isAnyOf,
} from '@reduxjs/toolkit';

import * as TodoApiActions from './actions/api.actions';
import * as TodoUiActions from './actions/ui.actions';

export interface TodoState extends EntityState<Todo, number> {
  callState: CallState;
  total: number;
}

export const todoAdapter: EntityAdapter<Todo, number> =
  createEntityAdapter<Todo>();

const initialState: TodoState = todoAdapter.getInitialState({
  callState: LoadingState.INIT,
  total: 0,
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TodoApiActions.todoPageDataFetchedSuccess, (state, action) => {
        return todoAdapter.setAll(
          {
            ...state,
            callState: LoadingState.LOADED,
            total: action.payload.total,
          },
          action.payload.data
        );
      })
      .addCase(
        TodoApiActions.todoTablePaginationChangedSuccess,
        (state, action) => {
          return todoAdapter.upsertMany(
            {
              ...state,
              callState: LoadingState.LOADED,
              total: action.payload.total,
            },
            action.payload.data
          );
        }
      )
      .addMatcher(
        isAnyOf(
          TodoUiActions.todoPageEntered,
          TodoUiActions.todoTablePaginationChanged
        ),
        (state) => ({
          ...state,
          callState: LoadingState.LOADING,
        })
      )
      .addMatcher(
        isAnyOf(
          TodoApiActions.todoPageDataFetchedFailed,
          TodoApiActions.todoTablePaginationChangedFailed
        ),
        (state, action) => ({
          ...state,
          callState: { errorMsg: action.payload.error },
        })
      );
  },
});
