// src/redux/slices/todosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type for a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define the initial state type
interface TodosState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'failed';
}

// Initial state
const initialState: TodosState = {
  todos: [],
  status: 'idle',
};

// Async thunk to fetch todos from the server
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get<Todo[]>('http://localhost:8080/api/todos'); // Replace with your API endpoint
  return response.data;
});

// Create the slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default todosSlice.reducer;
