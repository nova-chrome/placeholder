import { Todo } from './todo.model';

export const TODO_REPOSITORY_TOKEN = 'TODO_REPOSITORY_TOKEN';

export interface ITodoRepository {
  findAll: () => Promise<Todo[]>;
}
