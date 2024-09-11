import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
