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
  const total = useSelector(todoSelectors.selectTotal);

  React.useEffect(() => {
    dispatch(todoUiActions.todoPageEntered({ pageIndex: 1, pageSize: 10 }));
  }, []);

  return (
    <div className="mt-5">
      <DataTable data={todos} columns={COLUMNS} total={total} />
    </div>
  );
};
