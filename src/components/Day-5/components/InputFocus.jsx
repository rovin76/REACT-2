import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    handleFocus();
  }, []);
  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input type="text" ref={ref} />

      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default InputFocus;
