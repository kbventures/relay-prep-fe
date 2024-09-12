import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../../types/types';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get<Todo[]>('http://localhost:8080/api/todos'); // Replace with your API endpoint
    return response.data;
  });