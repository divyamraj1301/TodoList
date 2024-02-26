import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";

function App() {
  let initTasks;
  if (localStorage.getItem("tasks") === null) {
    initTasks = [];
  } else {
    initTasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const onDelete = (todo) => {
    console.log("On delete button", todo);

    setTasks(
      tasks.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTodo = (task, time) => {
    console.log("Add todo function called", task, time);
    let no;
    if (tasks.length === 0) {
      no = 1;
    } else {
      no = tasks[tasks.length - 1].no + 1;
    }
    const newTask = {
      no: no,
      task: task,
      time: time,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  };

  const [tasks, setTasks] = useState(initTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <AddTasks addTodo={addTodo} />
      <Todo tasks={tasks} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
