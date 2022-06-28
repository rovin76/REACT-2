import React from "react";
import "./styles.css";
import Button from "./Button";

const CartItem = ({ product_name, price, qty }) => {
  console.log("cart", product_name);
  return (
    <div>
      <ul>
        <li>
          <p> {product_name} </p>
          <p> {price} </p>
          <Button qty={qty} />
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
