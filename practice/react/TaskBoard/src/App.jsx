import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Stats from "./pages/Stats";
import { useState } from "react";
import TaskProvider from "./provider/taskProvider";

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
