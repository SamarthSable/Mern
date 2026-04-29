import React, { useEffect, useState } from "react";

export default function UserDetail() {
  const [user, SetUSer] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => SetUSer(data));
  }, []);
  return (
    <div>
      {user.map((user) =>
        !show ? (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ) : (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address?.street}</p>
          </div>
        ),
      )}

      <button onClick={() => setShow(true)}>Show All</button>
    </div>
  );
}
