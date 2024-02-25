import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      {todo.no}
      {todo.task}
      {todo.time}
    </div>
  );
};

export default TodoItem;
