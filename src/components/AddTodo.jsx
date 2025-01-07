import { useState } from "react";

const AddTodo = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAddTask(text);
      setText(""); // Clear input after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
