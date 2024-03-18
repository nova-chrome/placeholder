import {
  todoSelectors,
  todoUiActions,
} from '@placeholder/data-access/todo-state';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLUMNS } from './table/columns';
import { DataTable } from './table/data-table';

export const TodoFeature = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectAll);

  React.useEffect(() => {
    dispatch(todoUiActions.todoPageEntered());
  }, []);

  return (
    <div className="mt-5">
      <DataTable data={todos} columns={COLUMNS} />
    </div>
  );
};
