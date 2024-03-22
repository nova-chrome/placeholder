import {
  todoSelectors,
  todoUiActions,
} from '@placeholder/data-access/todo-state';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLUMNS } from './columns';
import { CreateTodoCard } from './create-todo-card';
import { DataTable } from './data-table';

export const TodoFeature = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectAll);
  const total = useSelector(todoSelectors.selectTotal);

  React.useEffect(() => {
    dispatch(todoUiActions.todoPageEntered({ pageIndex: 1, pageSize: 10 }));
  }, []);

  return (
    <div className="flex flex-col gap-3 mx-auto mt-5 lg:flex-row">
      <div className="order-1 w-full lg:w-1/3 lg:order-2">
        <CreateTodoCard />
      </div>
      <div className="order-2 w-full lg:w-2/3 lg:order-1">
        <DataTable data={todos} columns={COLUMNS} total={total} />
      </div>
    </div>
  );
};
