import { ITodoRepository, Todo } from '@placeholder/model/todo';

import { TodoRepositoryService } from './todo-repository.service';

export class TodoRepositoryApiStrategy implements ITodoRepository {
  constructor(private api: TodoRepositoryService) {}

  findAll = (): Promise<Todo[]> => {
    return this.api.findAll();
  };
}
