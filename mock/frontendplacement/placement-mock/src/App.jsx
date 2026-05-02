import { useState } from "react";
import "./App.css";
import FetchPost from "./FetchPost";
import { Link, Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";

function App() {
  const [post, setPost] = useState(() => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<FetchPost />} />
        <Route path="postdetail/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
