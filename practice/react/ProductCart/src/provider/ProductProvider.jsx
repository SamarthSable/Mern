import React, { createContext, useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";

export const ProductContext = createContext();
export default function ProductProvider({ children }) {
  const [product, dispatch] = useReducer(productReducer, []);
  const [cart, dispatchCart] = useReducer(productReducer, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "add", payload: data.products }));
  }, []);

  return (
    <ProductContext value={{ product, dispatch, cart, dispatchCart }}>
      {children}
    </ProductContext>
  );
}
