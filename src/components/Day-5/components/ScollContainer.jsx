import React, { useRef } from "react";

const ScrollContainer = () => {
  const ref = useRef();
  const handleClick = () => {
    ref.current.scrollTop = 0;
  };
  const data = new Array(100).fill(0).map((item, i) => <p>{i + 1}</p>);

  return (
    <div>
      <div ref={ref} style={{ height: "100px", overflowY: "scroll" }}>
        <ul>{data}</ul>
      </div>
      <button onClick={handleClick}>Scroll Top</button>
    </div>
  );
};

export default ScrollContainer;
