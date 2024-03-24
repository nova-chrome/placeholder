import {
  FindAllResponse,
  FindAllTodosRequestApiParams,
  FindAllTodosRequestParams,
  ITodoRepository,
} from '@placeholder/todo/model/todo';

import { TodoRepositoryService } from './todo-repository.service';

export class TodoRepositoryApiStrategy implements ITodoRepository {
  constructor(private api: TodoRepositoryService) {}

  findAll = (params: FindAllTodosRequestParams): Promise<FindAllResponse> => {
    return this.api.findAll(convertParamsToApi(params));
  };
}

function convertParamsToApi(
  params: FindAllTodosRequestParams
): FindAllTodosRequestApiParams {
  return {
    _page: params.pageIndex,
    _limit: params.pageSize,
  };
}
