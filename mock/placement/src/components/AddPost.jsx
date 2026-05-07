import React, { useContext, useState } from "react";
import { PostContent } from "../context/PostContext";

export default function AddPost() {
  const { post, setPost } = useContext(PostContent);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    console.log(title);
    console.log(body);
    setPost([
      ...post,
      {
        id: Date.now(),
        title: title,
        body: body,
      },
    ]);
    setTitle("");
    setBody("");
  }
  return (
    <div>
      <form>
        <label>Enter Title</label>
        <input
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Enter Description</label>
        <input
          placeholder="Enter Description here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={(e) => handleAdd(e)}>submit</button>
      </form>
    </div>
  );
}
