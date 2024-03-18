import { Todo } from '@placeholder/model/todo';
import {
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';

import * as TodoApiActions from './actions/api.actions';
import * as TodoUiActions from './actions/ui.actions';
import { CallState, LoadingState } from './call-state';

export interface TodoState extends EntityState<Todo, number> {
  callState: CallState;
}

export const todoAdapter: EntityAdapter<Todo, number> =
  createEntityAdapter<Todo>();

const initialState: TodoState = todoAdapter.getInitialState({
  callState: LoadingState.INIT,
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TodoUiActions.todoPageEntered, (state) => ({
        ...state,
        callState: LoadingState.LOADING,
      }))
      .addCase(TodoApiActions.todoPageDataFetchedSuccess, (state, action) => {
        return todoAdapter.setAll(
          { ...state, callState: LoadingState.LOADED },
          action.payload
        );
      })
      .addCase(TodoApiActions.todoPageDataFetchedFailed, (state, action) => ({
        ...state,
        callState: { errorMsg: action.payload.error },
      }));
  },
});
