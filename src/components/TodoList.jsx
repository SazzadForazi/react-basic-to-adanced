import { useState } from "react";
import Task from "./Task";
import { initialTasks } from "../data/initialTasks";

const TodoList = () => {
    const [tasks,setTasks] = useState(initialTasks);
    return (
      <ul>
      {
        tasks.map((task) => (
          <li key={task.id} ><Task  task={task} /></li>
        ))
      }
      </ul>
    );
};

export default TodoList;