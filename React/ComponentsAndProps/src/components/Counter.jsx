import React from "react";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(1);
  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
      }}
    >
      {" "}
      {count}
    </button>
  );
}
