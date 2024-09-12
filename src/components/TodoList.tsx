import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchTodos, deleteTodo, toggleTodo } from "../features/todo/todoThunk";
import { selectTodos, selectStatus } from "../features/todo/todoSelectors";

const TodoList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents the click from triggering handleDelete
    dispatch(toggleTodo(id));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading todos.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleDelete(todo.id)}>
          {todo.text}
          <div>
            <span>Completed: {String(todo.completed)}</span>
            <button onClick={(e) => handleToggle(todo.id, e)}>
              Toggle completed status
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
