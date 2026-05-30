import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [currentBlog, setBlog] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data) =>
      data.json().then((info) => setBlog(info)),
    );
  }, [id]);

  return (
    <>
      <div>
        <h1>{currentBlog.id}</h1>
        <h1>{currentBlog.title}</h1>
        <p>{currentBlog.body}</p>
      </div>
    </>
  );
}
