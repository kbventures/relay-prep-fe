import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../../types/types';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
      try {
        const response = await axios.get<Todo[]>('http://localhost:8080/api/todos');
        return response.data;
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unexpected error occurred @ Get Todo Thunk');
      }
    }
  );

export const addTodo = createAsyncThunk('todos/addTodo', async () => {
    try {
    const response = await axios.post<Todo[]>('http//localhost:8080/api/todos');
    return response.data;
    } catch (error){
        throw new Error(error instanceof Error ? error.message : "An unexpected error occured @ Add Todo Thunk");
    }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id:number) => {
    try {
    const response = await axios.delete<Todo[]>(`http//localhost:8080/api/todos/${id}`);
    return response.data;
    } catch (error){
        throw new Error(error instanceof Error ? error.message : "Unexpected Error @ Delete Todo Thunk")
    }
});

export const toggleTodo = createAsyncThunk('todos/ToggleTodo', async (id:number) => {
    try {
    const response = await axios.delete<Todo[]>(`http//localhost:8080/api/todos/${id}`);
    return response.data;
    } catch (error){
        throw new Error(error instanceof Error ? error.message : "Unexpected Error @ Delete Todo Thunk")
    }
});