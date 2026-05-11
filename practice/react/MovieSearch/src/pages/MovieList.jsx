import React, { useContext } from "react";
import { MovieContext } from "../provider/MovieProvider";
import { Link } from "react-router-dom";

export default function MovieList() {
  const { movie, setFav, fav } = useContext(MovieContext);
  function handleClick(m) {
    setFav([...fav, m]);
  }
  return (
    <>
      <Link to={"/favmovie"}>
        <button>Go to Fav</button>
      </Link>
      <div className="grid grid-cols-3">
        {movie.map((m) => (
          <div
            key={m.show.id}
            className="flex flex-col items-center justify-center m-5  shadow-2xl border rounded-2xl p-1.25"
          >
            <Link to={`moviedetail/${m.show.id}`}>
              {" "}
              <img src={m.show.image.original} width={200} />
            </Link>
            <p>{m.show.name}</p>
            <p>{m.show.type}</p>
            <p>{m.show.language}</p>
            <p>{m.show.rating.average}</p>
            <button
              className="border  rounded-2xl p-[5px] m-[5px] bg-yellow-50"
              onClick={() => handleClick(m)}
            >
              {" "}
              Add To Fav
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
