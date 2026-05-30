import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext();
export default function PostProvider({ children }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return <PostContext value={{ post }}>{children}</PostContext>;
}
