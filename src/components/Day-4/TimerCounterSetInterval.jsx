import React, { useEffect, useState } from "react";

const TimerCounterSetInterval = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Mounting
    let id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Unmounting
    const cleanup = () => {
      console.log("Unmounting", count);
      clearInterval(id);
    };
    return cleanup;
  }, []);
  return (
    <div>
      <h1> Timer </h1>
      <h1> Second Counter : {count}</h1>
      <h3>Update Every Second </h3>
    </div>
  );
};

export default TimerCounterSetInterval;
