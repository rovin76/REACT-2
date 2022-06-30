import React, { useState } from "react";
import TimerCounterSetInterval from "./TimerCounterSetInterval";

const TimerMount = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <TimerCounterSetInterval />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default TimerMount;
