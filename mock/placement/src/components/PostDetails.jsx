import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContent } from "../context/PostContext";

export default function PostDetails() {
  const { post } = useContext(PostContent);
  const { id } = useParams();
  console.log(id);

  const data = post.find((p) => p.id === Number(id));
  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Title</h1>
      <p>{data.title}</p>
      <h1>Description</h1>
      <p>{data.body}</p>
    </div>
  );
}
