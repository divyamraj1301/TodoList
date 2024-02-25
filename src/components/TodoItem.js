import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="d-flex mb-2" style={{ justifyContent: "space-between" }}>
      <div>{todo.no}</div>
      <div className="text-center">{todo.task}</div>
      <div>{todo.time}</div>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
