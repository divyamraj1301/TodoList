import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ tasks, onDelete }) => {
  const todoStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={todoStyle}>
      <h3 className="my-3">Tasks to do</h3>
      {tasks.length
        ? tasks.map((todo) => {
            return <TodoItem todo={todo} key={tasks.no} onDelete={onDelete} />;
          })
        : "No tasks yet"}
    </div>
  );
};

export default Todo;
