import React, { useState } from 'react';
import './App.css';

function CounterHooks() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  }

  return (
    <div>
      <h3
      className="center">
        Welcome to the Counter of Life
      </h3>
      <button
        className="center-block"
        onClick={handleClick}>
          {count}
        </button>
        <p className="center">
          at: {`${time.getHours()}:${time.getMinutes()} : ${time.getSeconds()}`}
        </p>
    </div>
  );
}

export default CounterHooks;
