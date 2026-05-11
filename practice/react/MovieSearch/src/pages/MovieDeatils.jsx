import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../provider/MovieProvider";

export default function MovieDeatils() {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const currentMovie = movie.find((m) => m.show.id == id);
  if (!currentMovie) return "No movie FOund";
  return (
    <div className="flex items-center justify-center ">
      {" "}
      <div
        key={currentMovie.show.id}
        className="flex flex-col items-center justify-center m-[20px] shadow-2xl border rounded-2xl w-[500px] p-[5px]"
      >
        <img src={currentMovie.show.image.original} width={200} />

        <p>{currentMovie.show.name}</p>
        <p>{currentMovie.show.type}</p>
        <p>{currentMovie.show.language}</p>
        <p>{currentMovie.show.rating.average}</p>
        <button className="border  rounded-2xl p-[5px] m-[5px] bg-yellow-50">
          {" "}
          Add To Fav
        </button>
      </div>
    </div>
  );
}
