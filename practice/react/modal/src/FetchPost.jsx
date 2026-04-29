import React, { useEffect, useState } from "react";

export default function FetchPost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {post.slice(0, 5).map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
