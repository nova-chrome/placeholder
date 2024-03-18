import { Todo } from '@placeholder/model/todo';
import axios, { AxiosInstance } from 'axios';

export class TodoRepositoryService {
  private _axios: AxiosInstance;

  constructor(private baseUrl: string) {
    this._axios = axios.create({ baseURL: this.baseUrl });
  }

  async findAll(): Promise<Todo[]> {
    return this._axios?.get<Todo[]>('/todos').then((r) => r.data);
  }
}
