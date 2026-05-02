import React, { useContext } from "react";
import { PostContext } from "./App";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { post, addFavorite } = useContext(PostContext);
  const { id } = useParams();

  if (post.length === 0) return <p>Loading...</p>;

  const item = post.find((p) => p.id === Number(id));

  if (!item) return <p>Post not found</p>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>

      <button onClick={() => addFavorite(item)}>⭐ Add to Favorites</button>
    </div>
  );
}
