import React from "react";

export default function Container({ children }) {
  return (
    <div class="card" style={{ width: "70%" }}>
      <div class="card-body">{children}</div>
    </div>
  );
}
