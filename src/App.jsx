import { useCallback, useState, useMemo } from "react";
import "./App.css";
import OurAppTitles from "./components/OurAppTitles";
import Button from "./Button";
import Title from "./components/Title.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseHandleClick = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  const increaseHandleClick2 = useCallback(() => {
    setCount2((pre) => pre + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++; // Simulate a heavy computation
    return count % 2 === 0 ? `Counter is Even` : `Counter is Odd`;
  }, [count]);

  console.log("isEven:", isEven);
  console.log("App rendered");

  return (
    <div>
      <h1>Simple Todo App</h1>
      <OurAppTitles />
      <hr />
      <div className="counter-app-1">
        <Title value={count} />
        <p>{isEven}</p> {/* Use isEven directly */}
        <Button clickHandler={increaseHandleClick} />
      </div>
      <div className="counter-app-1">
        <Title value={count2} />
        <Button clickHandler={increaseHandleClick2} />
      </div>
    </div>
  );
}

export default App;
