import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function PostSelector() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  async function fetchPosts(postId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    const result = await response.json();
    setPost(result);
  }

  useEffect(() => {
    fetchPosts(postId);
  }, [postId]);

  function updateId(buttonType) {
    if (buttonType === "next") {
      setPostId(postId + 1);
    } else {
      setPostId(postId - 1);
    }
  }
  return (
    <>
      <Post post={post} />
      <div>
        <button onClick={() => updateId("prev")}>Previous</button>
        <button onClick={() => updateId("next")}>Next</button>
      </div>
    </>
  );
}
