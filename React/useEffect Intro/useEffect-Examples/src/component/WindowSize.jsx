import React from "react";
import { useEffect } from "react";

export default function WindowSize() {
  function onResize(event) {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <div>WindowSize</div>;
}
