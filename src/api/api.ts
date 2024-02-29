import axios from 'axios';
import { ITodoList } from '../App';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const axiosGetTodoList = async () => {
  try {
    const response = await api.get('/todoList');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const axiosPostTodoList = async (newTodo: ITodoList) => {
  try {
    const response = await api.post('/todoList', newTodo);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const axiosDeleteTodoList = async (todoID: string) => {
  try {
    const response = await api.delete(`/todoList/${todoID}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting list:', error);
    throw error;
  }
};
