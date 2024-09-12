// src/components/TodoList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchTodos, deleteTodo } from "../features/todo/todoThunk";
import { selectTodos, selectStatus } from "../features/todo/todoSelectors";

const TodoList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading todos.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleDelete(todo.id)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
