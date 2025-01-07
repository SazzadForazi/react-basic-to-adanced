import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const taskContent = isEditing ? (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onChange({ ...task, text: e.target.value })}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChange({ ...task, done: !task.done })}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
};

export default Task;
