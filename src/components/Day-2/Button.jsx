import React from "react";

const Button = ({ id, qty, handleQtyChange }) => {
  return (
    <div>
      <button disabled={qty === 0} onClick={() => handleQtyChange(id, -1)}>
        -
      </button>
      {qty}
      <button onClick={() => handleQtyChange(id, +1)}>+</button>
    </div>
  );
};

export default Button;
