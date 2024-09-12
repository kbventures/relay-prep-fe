export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define the initial state type
export interface TodosState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'failed';
}