import React, { useState, useEffect } from 'react';
import './App.css';

function CounterHooks() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  useEffect(() => {
    console.log('useEffect first timer here.');
  }, []);

  return (
    <div>
      <h3
      className="center">
        Welcome to the Counter of Life
      </h3>
      <button
        className="center-block"
        onClick={handleClick}>
          Click Me
        </button>
        <p>Clicked {count} times</p>
        <p className="center">
          at: {`${time.getHours()}:${time.getMinutes()} : ${time.getSeconds()}`}
        </p>
    </div>
  );
};

export default CounterHooks;
