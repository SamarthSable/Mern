import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../slices/productsSlice";

export default function Show() {
  const { products, loading } = useSelector((state) => state.products);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const filter = Array.from(new Set(products.map((p) => p.category)));

  function handleList(value) {
    if (value === "All") {
      setList(products);
    } else {
      setList(products.filter((p) => p.category === value));
    }
  }
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    setList(products);
  }, [products]);
  console.log(products);
  console.log(filter);

  if (loading) return <h1>Loading...</h1>;
  if (products.length === 0) return "NO Products";
  return (
    <div>
      <div>
        <select onChange={(e) => handleList(e.target.value)}>
          <option value="All">All</option>;
          {filter.map((f) => {
            return <option value={f}>{f}</option>;
          })}
        </select>
      </div>
      <div>
        {list.map((p) => (
          <div key={p.id}>
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
