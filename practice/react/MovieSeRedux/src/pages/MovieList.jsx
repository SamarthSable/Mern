import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, addToMyFav } from "../store/movieSlice";
import { Link } from "react-router-dom";
export default function MovieList() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movies);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=batman")
      .then((res) => res.json())
      .then((data) => dispatch(add(data)));
  }, []);
  if (movie.length === 0) return "No movie";

  return (
    <>
      <div className="flex flex-row justify-between p-[20px]">
        <div className="flex gap-2.5">
          <label>Search</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border"
          />
        </div>
        <Link to={"/myfavmovie"}>
          {" "}
          <button className="border bg-amber-500 w-[100px] rounded-2xl">
            Go to FAv
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 justify-center items-center">
        {movie
          .filter((m) =>
            m.show.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((m) => (
            <div
              key={m.show.id}
              className="flex flex-col justify-center items-center gap-2.5 m-1.25 border h-[400px]"
            >
              <img src={m.show?.image?.original} width={200} />
              <p>{m.show.name}</p>
              <button
                className="border bg-amber-500 w-[100px] rounded-2xl"
                onClick={() => dispatch(addToMyFav(m))}
              >
                Add To Fav
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
