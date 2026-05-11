import React, { useContext } from "react";
import { MovieContext } from "../provider/MovieProvider";
import { Link } from "react-router-dom";
export default function MyMovies() {
  const { fav, setFav } = useContext(MovieContext);
  function handleClick(id) {
    console.log(id);
    setFav(fav.filter((m) => m.show.id !== id));
  }
  if (fav.length === 0) return "No movies TO FAv";
  return (
    <div className="grid grid-cols-3 ">
      {fav.map((m) => (
        <div
          key={m.show.id}
          className="flex flex-col items-center justify-center m-[20px] justify-center  shadow-2xl border rounded-2xl p-[5px]"
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
            onClick={() => handleClick(m.show.id)}
          >
            {" "}
            Remove From Fav
          </button>
        </div>
      ))}
    </div>
  );
}
