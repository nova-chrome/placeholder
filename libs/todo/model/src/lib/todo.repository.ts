import { Todo } from './todo.model';

export const TODO_REPOSITORY_TOKEN = 'TODO_REPOSITORY_TOKEN';

export interface FindAllTodosRequestParams {
  pageIndex: number;
  pageSize: number;
}

export interface FindAllTodosRequestApiParams {
  _page: number;
  _limit: number;
}

export interface FindAllResponse {
  data: Todo[];
  total: number;
}

export interface ITodoRepository {
  findAll: (params: FindAllTodosRequestParams) => Promise<FindAllResponse>;
}
