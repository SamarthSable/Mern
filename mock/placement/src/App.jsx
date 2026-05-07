import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./components/Post";
import PostContext from "./context/PostContext";
import PostDetails from "./components/PostDetails";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <PostContext>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/postdetails/:id" element={<PostDetails />} />
        </Routes>
      </PostContext>
    </>
  );
}

export default App;
