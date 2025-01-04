import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);    // useState()
    const [message, setMessage] = useState("Hello World");
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <br />
            <br />
            {message}
            <br />
            <br />
            <button onClick={() => setMessage("Changed")}>ChangeMessage</button>
        </div>
    );
}

export default Counter;