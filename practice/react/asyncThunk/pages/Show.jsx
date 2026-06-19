import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../slices/productsSlice";
export default function Show() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const { products, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  console.log(products);
  useEffect(() => {
    setList(products);
  }, [products]);
  if (loading) return <p>Loading...</p>;
  const setOfName = Array.from(new Set(products.map((p) => p.category)));
  console.log(setOfName);

  function handleChange(s) {
    if (s === "All") {
      setList(products);
    } else {
      setList(products.filter((p) => p.category === s));
    }

    console.log(list);
  }

  return (
    <div>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="All">All</option>
        {setOfName.map((s) => (
          <option value={s}>{s}</option>
        ))}
      </select>
      {list.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}
