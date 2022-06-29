import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoUseEffect = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
      );
      let data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log("todos", todos);
  return (
    <div>
      <h3>.............Day-3...........</h3>
      <h1>Todo List Using UseEffect</h1>
      <TodoList data={todos} />
    </div>
  );
};

export default TodoUseEffect;
