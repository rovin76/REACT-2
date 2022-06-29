import React from "react";

const TodoItem = ({ item, id }) => {
  console.log("title", item);
  return (
    <div style={{ display: "flex", gap: "20px", width: "60%", margin: "auto" }}>
      <div>{id}</div>
      <div>{item} </div>
    </div>
  );
};

export default TodoItem;
