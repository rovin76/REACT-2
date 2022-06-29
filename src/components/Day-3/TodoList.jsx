import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((elem) => (
        <TodoItem item={elem.title} id={elem.id} />
      ))}
    </div>
  );
};

export default TodoList;
