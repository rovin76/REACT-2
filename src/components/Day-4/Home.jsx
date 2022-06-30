import React from "react";
import TimerSetInterval from "./TimerWithSetInterval";
import TimerSetOut from "./TimerWithSetOut";
import TimerMount from "./UnMountTimerUseEffect.jsx";
const Home = () => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>..............Day-4...............</h3>
      <TimerSetInterval />
      <TimerSetOut />
      <TimerMount />
    </div>
  );
};

export default Home;
