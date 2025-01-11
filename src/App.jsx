import "./App.css";
import TaskProvider from "./contexts/TasksContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Simple Todo App</h1>
      <TaskProvider>
        <AddTodo />
        <TodoList />
      </TaskProvider>
    </div>
  );
}

export default App;
