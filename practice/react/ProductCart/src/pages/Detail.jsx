import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../provider/ProductProvider";

export default function Detail() {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const currentPost = product.find((p) => p.id == id);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        <img
          src={currentPost.images[0]}
          alt={currentPost.title}
          className="w-full md:w-1/2 h-96 object-cover rounded-2xl hover:scale-105 transition duration-300"
        />

        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-4xl font-bold text-gray-800">
            {currentPost.title}
          </h1>

          <p className="text-gray-600 text-lg">{currentPost.description}</p>

          <p className="text-3xl font-bold text-green-600">
            ${currentPost.price}
          </p>

          <p className="text-yellow-500 text-lg">⭐ {currentPost.rating}</p>

          <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 rounded-xl p-3 font-semibold transition duration-300 hover:scale-95">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
