import React from "react";

const Button = ({ qty }) => {
  return (
    <div>
      <button>-</button>
      {qty}
      <button>+</button>
    </div>
  );
};

export default Button;
