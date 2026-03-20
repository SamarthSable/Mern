import React, { useEffect, useState } from "react";
import WindowSize from "./WindowSize";
export default function Timer() {
  const [time, setTime] = useState(0);
  const [showWindow, setShowWindow] = useState(true);

  useEffect(() => {
    function tick() {
      setTime((prevTime) => prevTime + 1);
    }

    let intervalId = setInterval(tick, 1000);
    return () => {
      console.log("Clear Called");
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div>{time}</div>; {showWindow ? <WindowSize /> : null}
      <button
        onClick={() => {
          setShowWindow(false);
        }}
      >
        Stop Resize
      </button>
    </>
  );
}
