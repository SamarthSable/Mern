import React, { useState } from "react";

export default function ChildParet({ sendData }) {
  const [head, setHead] = useState();
  return (
    <div>
      <input
        onChange={(e) => {
          setHead(e.target.value);
          sendData(e.target.value);
        }}
        value={head}
      />
    </div>
  );
}
