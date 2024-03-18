import {
  todoSelectors,
  todoUiActions,
} from '@placeholder/data-access/todo-state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoPage() {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectAll);

  useEffect(() => {
    dispatch(todoUiActions.todoPageEntered());
  }, []);

  return <>{JSON.stringify(todos, null, 2)}</>;
}
