import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TimerSetOut = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h4> With SetTimeOut </h4>
      <h1>Counter : {count}</h1>
    </div>
  );
};

export default TimerSetOut;
