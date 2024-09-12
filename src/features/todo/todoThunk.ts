import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../../types/types';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get<Todo[]>('http://localhost:8080/api/todos'); // Replace with your API endpoint
    return response.data;
  });

export const addTodo = createAsyncThunk('todos/addTodo', async () => {
    const response = await axios.post<Todo[]>('http//localhost:8080/api/todos');
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id:number) => {
    const response = await axios.delete<Todo[]>(`http//localhost:8080/api/todos/${id}`);
    return response.data;
});

export const toggleTodo = createAsyncThunk('todos/ToggleTodo', async (id:number) => {
    const response = await axios.patch<Todo[]>(`http//localhost:8080/api/todos/${id}`);
    return response.data;
});