// src/components/TodoList.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodo } from "../features/todo/todoThunk";

const AddTodo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue(event.target.value);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
