import React, { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
export default function FetchPost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  if (post.length === 0) {
    return "NO posts";
  }

  return (
    <div className="container">
      {post.map((item) => {
        return (
          <div key={item.id} className="box">
            <p>
              <Link to={`postdetail/${item.id}`}>{item.title}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
