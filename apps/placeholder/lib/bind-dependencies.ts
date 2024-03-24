import { diContainer } from '@placeholder/core/util/dependency-injection';
import {
  TodoRepositoryApiStrategy,
  TodoRepositoryService,
} from '@placeholder/todo/data-access/todo-infrastructure';
import { TODO_REPOSITORY_TOKEN } from '@placeholder/todo/model';

export function bindDependencies() {
  diContainer.unbindAll();

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  diContainer
    .bind(TODO_REPOSITORY_TOKEN)
    .toConstantValue(
      new TodoRepositoryApiStrategy(new TodoRepositoryService(baseUrl))
    );
}
