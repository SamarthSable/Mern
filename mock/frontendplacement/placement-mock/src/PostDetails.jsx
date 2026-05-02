import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function PostDetails() {
  const id = useParams();
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`).then((res) =>
      res.json().then((data) => setPost(data)),
    );
  }, [id.id]);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
