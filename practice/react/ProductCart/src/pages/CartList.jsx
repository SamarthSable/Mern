import React, { useContext } from "react";
import { ProductContext } from "../provider/ProductProvider";

export default function CartList() {
  const { cart, dispatchCart } = useContext(ProductContext);

  return (
    <>
      <h1 className="text-center text-4xl font-bold my-6">My Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cart.map((p) => (
          <div
            key={p.id}
            className="border border-gray-300 rounded-3xl shadow-lg p-5 flex flex-col items-center gap-3 hover:scale-95 transition duration-300 bg-white"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="w-52 h-52 object-cover rounded-2xl"
            />

            <p className="text-2xl font-bold text-center">{p.title}</p>

            <p className="text-gray-600 text-center line-clamp-3">
              {p.description}
            </p>

            <button
              onClick={() =>
                dispatchCart({ type: "removeCart", payload: p.id })
              }
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl font-semibold transition duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
