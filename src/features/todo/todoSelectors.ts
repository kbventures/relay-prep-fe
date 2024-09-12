import { RootState } from '../../app/store';

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectStatus = (state: RootState) => state.todos.status;
