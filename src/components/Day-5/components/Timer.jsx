import React, { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };
  return (
    <div>
      <h1>Timer : {count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};

export default Timer;
