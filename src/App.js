import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  //States
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //Date
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <h1>Date Counter 🗓️ </h1>
      <div className="counter-wrapper">
        <button className="btn" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <h2>Step:{step}</h2>
        <button className="btn" onClick={() => setStep((s) => s + 1)}>
          +
        </button>

        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <h2>Count: {count} </h2>
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <h3>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </h3>
    </div>
  );
}

function IncreaseBtn() {
  return (
    <div>
      <button className="btn">+</button>
    </div>
  );
}

function DecreaseBtn() {
  return (
    <div>
      <button className="btn">-</button>
    </div>
  );
}
