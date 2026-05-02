import React, { useContext } from "react";
import { PostContext } from "./App";

export default function Favorite() {
  const { favorites, removeFavorite } = useContext(PostContext);

  if (favorites.length === 0) return <p>No favorites yet</p>;

  return (
    <div>
      <h2>Favorites</h2>

      {favorites.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => removeFavorite(item.id)}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
}
