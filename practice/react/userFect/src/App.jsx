import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  return (
    <>
      <h1>User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <p>
            Name: {item.firstName} {item.lastName}
          </p>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
    </>
  );
}

export default App;
