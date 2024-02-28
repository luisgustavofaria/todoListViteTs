import axios from 'axios';

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
