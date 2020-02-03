import axios, { AxiosResponse } from 'axios';
import { TodoData } from '../types/types';

const configApi = {
  URL: 'http://localhost:4000/',
};

const getTodos = (): Promise<AxiosResponse> => {
  return axios.get(configApi.URL + 'todo');
};

const addTodo = (data: TodoData): Promise<AxiosResponse> => {
  return axios.post(configApi.URL + 'todo', data);
};

export default { getTodos, addTodo };
