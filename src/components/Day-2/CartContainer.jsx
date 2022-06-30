import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

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

  const handleQtyChange = (id, value) => {
    let temp = data.map((item) =>
      item.id === id ? { ...item, qty: item.qty + value } : item
    );
    setData(temp);
  };

  const TotalCost = (data) => {
    return data.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  };
  return (
    <div
      style={{ border: "1px solid black", marginTop: "20px", padding: "10px" }}
    >
      <h3>............Day-2...............</h3>
      {data.map((item) => (
        <CartItem
          key={item.id}
          product_name={item.product_name}
          price={item.price}
          qty={item.qty}
          handleQtyChange={handleQtyChange}
          id={item.id}
        />
      ))}

      <Total total={TotalCost(data)} />
    </div>
  );
};

export default CartContainer;
