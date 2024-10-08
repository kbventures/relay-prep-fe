// src/redux/slices/todosSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from './todoThunk';
import { TodosState, Todo } from '../../types/types'


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
      })
      .addCase(addTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos.push(action.payload as Todo)
      })
      .addCase(addTodo.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const idToDelete = action.payload; 
        state.status = 'idle';
        state.todos = state.todos.filter(todo => todo.id !== idToDelete);
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.status = 'failed';      
      })
      .addCase(toggleTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload as Todo; // Assuming payload is the updated Todo
        state.todos = state.todos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        state.status = 'idle';
    })
    
      .addCase(toggleTodo.rejected, (state) => {
        state.status = 'failed';      
      });
      
  },
});

export default todosSlice.reducer;