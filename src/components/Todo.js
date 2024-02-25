import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ tasks, onDelete }) => {
  return (
    <div className="container">
      <h3 className="text-center m-3">Tasks to do</h3>
      {tasks.length
        ? tasks.map((todo) => {
            return <TodoItem todo={todo} key={tasks.no} onDelete={onDelete} />;
          })
        : "No tasks yet"}
    </div>
  );
};

export default Todo;
