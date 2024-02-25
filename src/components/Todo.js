import React from "react";
import TodoItem from "./TodoItem";

const Todo = (props) => {
  return (
    <div className="container">
      <h3>Tasks to do</h3>
      {/* {props.tasks} */}
      <TodoItem todo={props.tasks[0]} />
    </div>
  );
};

export default Todo;
