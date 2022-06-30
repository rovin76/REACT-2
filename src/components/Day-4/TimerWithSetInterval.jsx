import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TimerSetInterval = () => {
  const [count, setCount] = useState(0);

  const starter = () => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    starter();
  }, []);
  return (
    <div>
      <h4> With setInterval Timer </h4>
      <h2>Count : {count} </h2>
    </div>
  );
};
export default TimerSetInterval;
