
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { initialTasks } from "./data/initialTasks";
import tasksReducer from "./reducers/taskReducer";
import { useImmerReducer } from "use-immer";

let nextId = 4;
function App() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  const handleChangeTask = (updatedTask) => {
    dispatch({
      type: "changed",
      task: updatedTask,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "deleted",
      id,
    });
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text,
    });
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
