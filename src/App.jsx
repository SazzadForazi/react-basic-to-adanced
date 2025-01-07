import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { initialTasks } from "./data/initialTasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleChangeTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <AddTodo onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
