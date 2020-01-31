import axios, { AxiosResponse } from 'axios';
import { TodoData } from '../types/types';

const configApi = {
  URL: 'http://localhost:4000/',
};

const createTodo = (data: TodoData): Promise<AxiosResponse> => {
  return axios.post(configApi.URL + 'todo', data);
};

export default { createTodo };
