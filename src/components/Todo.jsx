import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: text,
        isCompleted: false
      }
    ]);
  };
  const handleToggle = (id) => {
    // write logic later
    const updatedData = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            isCompleted: !item.isCompleted
          }
        : item
    );
    setTodos(updatedData);
  };
  console.log("todos", todos);
  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <TodoAdd handleAdd={handleAdd} />
      <TodoItem
        data={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Todo;
