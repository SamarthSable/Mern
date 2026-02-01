import React from "react";
import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const counter = useSelector((state) => state.counter);
  return <p className="lead mb-4">counter current value: {counter}</p>;
}
