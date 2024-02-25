import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import { useState } from "react";
import AddTasks from "./components/AddTasks";

function App() {
  const onDelete = (todo) => {
    console.log("On delete button", todo);

    setTasks(
      tasks.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (task, time) => {
    console.log("Add todo function called", task, time);
    let no = tasks[tasks.length - 1].no + 1;
    const newTask = {
      no: no,
      task: task,
      time: time,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  };

  const [tasks, setTasks] = useState([
    {
      no: 1,
      task: "Buy groceries",
      time: "12:00 PM",
    },
    {
      no: 2,
      task: "Complete homework",
      time: "04:00 PM",
    },
    {
      no: 3,
      task: "Clean room",
      time: "06:00 AM",
    },
  ]);

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
