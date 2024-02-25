import React, { useState } from "react";

const AddTasks = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!task || !time) {
      alert("Please fill out all fields");
    }
    addTodo(task, time);
  };
  return (
    <div className="container my-4">
      <h3>Add Tasks</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="text"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            cla
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
