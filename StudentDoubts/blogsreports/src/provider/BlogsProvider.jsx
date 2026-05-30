import { createContext, useEffect, useState } from "react";
export const BlogContext = createContext();

export default function BlogsProvider({ children }) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((info) => setPost(info));
  }, []);
  console.log(post);
  return <BlogContext value={{ post }}>{children}</BlogContext>;
}
