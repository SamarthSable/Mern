// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(`${name} ${email}`);
//   }
//   return (
//     // <>
//     //   <button onClick={() => setCount(count + 1)}>+</button>
//     //   <p>{count}</p>
//     //   <button onClick={() => setCount(count - 1)}>-</button>
//     // </>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input type="password" placeholder="Password" />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;
import { useEffect, useState } from "react";

function LiveBitcoinPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    function fetchPrice() {
      fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
        .then((res) => res.json())
        .then((data) => {
          setPrice(data.bpi.USD.rate);
        })
        .catch((error) => console.log(error));
    }

    // First call
    fetchPrice();

    // Call every 5 seconds (real time)
    const interval = setInterval(fetchPrice, 5000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Bitcoin Price</h2>
      <p>{price ? `$ ${price}` : "Loading..."}</p>
    </div>
  );
}

export default LiveBitcoinPrice;
