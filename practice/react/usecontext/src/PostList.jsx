import React, { useContext } from "react";
import { PostContext } from "./App";
import { Link } from "react-router-dom";
import "./PostList.css";

export default function PostList() {
  const { post, addFavorite } = useContext(PostContext);

  if (post.length === 0) return <p>Loading...</p>;

  return (
    <div className="container">
      {post.map((item) => (
        <div key={item.id} className="item">
          <Link to={`/postdetail/${item.id}`}>
            <p>{item.title}</p>
          </Link>

          <button onClick={() => addFavorite(item)}>⭐ Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
