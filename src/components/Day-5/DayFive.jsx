import React from "react";
import Forms from "./components/Forms";
import InputFocus from "./components/InputFocus";
import ScrollContainer from "./components/ScollContainer";
import Timer from "./components/Timer";

const DayFive = () => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>...........Day-5............</h3>
      <ScrollContainer />
      <InputFocus />
      <Timer />
      <Forms />
    </div>
  );
};

export default DayFive;
