import React from "react";
import { useSelector } from "react-redux";

export default function Summary() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);
  console.log(cart);
  console.log(total);
  return (
    <div>
      <h1>Summary</h1>
      <p>{total}</p>
    </div>
  );
}
