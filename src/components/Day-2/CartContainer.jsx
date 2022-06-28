import React, { useState } from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  let initialData = [
    {
      id: 1,
      product_name: "Chips",
      price: 30,
      qty: 1
    },
    {
      id: 2,
      product_name: "Chowmine",
      price: 90,
      qty: 1
    },
    {
      id: 3,
      product_name: "Paratha",
      price: 60,
      qty: 1
    }
  ];
  const [data, setData] = useState(initialData);
  return (
    <div>
      <h3>............Day-2...............</h3>
      {data.map((item) => (
        <CartItem
          key={item.id}
          product_name={item.product_name}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </div>
  );
};

export default CartContainer;
