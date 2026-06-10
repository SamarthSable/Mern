import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../reducer/reducer";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  function handleAdd() {
    const cartItem = {
      id: Date.now(),
      title,
      amount,
    };

    dispatch(add(cartItem));
    setAmount("");
    setTitle("");
  }

  function handleDel(id) {
    dispatch(del(id));
  }
  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <p>No item Yet...</p>
        ) : (
          cart.map((p) => (
            <div key={p.id}>
              <p>{p.title}</p>
              <p>{p.amount}</p>
              <button onClick={() => handleDel(p.id)}>Del</button>
            </div>
          ))
        )}
      </div>
      <input
        placeholder="Enter Item Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
