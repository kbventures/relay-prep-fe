import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddToto";

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
