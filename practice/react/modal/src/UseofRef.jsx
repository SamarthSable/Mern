import React, { useRef } from "react";
import { useEffect } from "react";

export default function UseofRef() {
  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}
