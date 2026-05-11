import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();
export default function MovieProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const [fav, setFav] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=batman")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return <MovieContext value={{ movie, fav, setFav }}>{children}</MovieContext>;
}
