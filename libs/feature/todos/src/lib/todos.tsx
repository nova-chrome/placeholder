import {
  todoSelectors,
  todoUiActions,
} from '@placeholder/data-access/todo-state';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@placeholder/ui-kit/ui';
import { Check, X } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TodoFeature = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectAll);

  React.useEffect(() => {
    dispatch(todoUiActions.todoPageEntered());
  }, []);

  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => {
          return (
            <TableRow key={todo.id + todo.userId + todo.title}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell className="flex justify-end">
                {todo.completed ? <Check /> : <X />}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
