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

const getTodo = (id: string): Promise<AxiosResponse> => {
  return axios.get(configApi.URL + 'todo/' + id);
};

const editTodo = (id: string, data: TodoData): Promise<AxiosResponse> => {
  return axios.put(configApi.URL + 'todo/' + id, data);
};

export default { getTodos, addTodo, getTodo, editTodo };
