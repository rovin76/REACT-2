import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoUseEffect = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const getTodos = async (page) => {
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
      );
      let data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getTodos(page);
  }, [page]);
  console.log("todos", todos);
  return (
    <div>
      <h3>.............Day-3...........</h3>
      <h1>Todo List Using UseEffect</h1>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span style={{ padding: "20px" }}> {page} </span>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <TodoList data={todos} />
    </div>
  );
};

export default TodoUseEffect;
