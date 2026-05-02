import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import Favorite from "./Favorite";

export const PostContext = createContext();

function App() {
  const [post, setPost] = useState([]);
  const [favorites, setFav] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const addFavorite = (item) => {
    setFav((prev) =>
      prev.find((p) => p.id === item.id) ? prev : [...prev, item],
    );
  };

  const removeFavorite = (id) => {
    setFav((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PostContext.Provider
      value={{
        post,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {/* Navbar */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> | <Link to="/favorite">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/postdetail/:id" element={<PostDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </PostContext.Provider>
  );
}

export default App;
