import React from "react";
import "./styles.css";
import Button from "./Button";

const CartItem = ({ handleQtyChange, product_name, price, qty, id }) => {
  console.log("cart", product_name);
  return (
    <div>
      <ul>
        <li style={{ display: "flex" }}>
          <p> {product_name} </p>
          <p> {price} </p>
          <Button qty={qty} id={id} handleQtyChange={handleQtyChange} />
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
