import React, { createContext, useEffect, useState } from "react";
export const PostContent = createContext();

export default function PostContext({ children }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return <PostContent value={{ post, setPost }}>{children}</PostContent>;
}
