import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  let tasks = [
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
  ];

  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <Todo tasks={tasks} />
      <Footer />
    </>
  );
}

export default App;
