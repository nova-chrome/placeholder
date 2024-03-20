import {
  FindAllResponse,
  FindAllTodosRequestApiParams,
  Todo,
} from '@placeholder/model/todo';
import axios, { AxiosInstance } from 'axios';

export class TodoRepositoryService {
  private _axios: AxiosInstance;

  constructor(private baseUrl: string) {
    this._axios = axios.create({ baseURL: this.baseUrl });
  }

  async findAll(
    params: FindAllTodosRequestApiParams
  ): Promise<FindAllResponse> {
    const response = await this._axios?.get<Todo[]>('/todos', { params });

    return {
      data: response.data,
      total: +(response.headers.get as any)?.('X-Total-Count') ?? 0,
    };
  }
}
