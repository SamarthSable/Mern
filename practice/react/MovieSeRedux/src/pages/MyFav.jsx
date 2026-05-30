import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rmFromMyFav } from "../store/movieSlice";
export default function MyFav() {
  const movie = useSelector((state) => state.movie.favMovies);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2.5">
        <label>Search</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border"
        />
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
                onClick={() => dispatch(rmFromMyFav(m.show.id))}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
