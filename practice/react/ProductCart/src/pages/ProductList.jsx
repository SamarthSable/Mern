import React, { useContext, useState } from "react";
import { ProductContext } from "../provider/ProductProvider";
import { Link, Outlet } from "react-router-dom";

export default function ProductList() {
  const { product, dispatchCart } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex flex-row justify-between m-5 ">
        <div>
          <h1>Search</h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-black"
          />
        </div>
        <Link to={"/mycart"}>
          <button className="border rounded-sm border-black p-2 bg-yellow-200 hover:scale-95">
            Go to Cart
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {product
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((p) => (
            <div
              key={p.id}
              className="border border-gray-400 shadow-2xl p-4 flex flex-col justify-center items-center rounded-4xl gap-1"
            >
              <img src={p.images[0]} width={200} className="hover:scale-150" />
              <Link to={`/detail/${p.id}`}>
                {" "}
                <p className="text-2xl font-bold">{p.title}</p>
              </Link>
              <p>{p.description}</p>
              <button
                onClick={() => {
                  dispatchCart({ type: "addToCart", payload: p });
                }}
                className="border  rounded-sm border-black p-2 bg-yellow-200 hover:scale-95 "
                style={{ width: "100px" }}
              >
                Add TO Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
