import React, { useRef } from "react";

export default function Focus() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}
