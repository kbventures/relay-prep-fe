// src/redux/slices/todosSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todoThunk';
import { TodosState } from '../../types/types'


// Initial state
const initialState: TodosState = {
  todos: [],
  status: 'idle',
};

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