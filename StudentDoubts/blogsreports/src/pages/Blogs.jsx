import "./Blogs.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../provider/BlogsProvider";

export default function Blogs() {
  const { post } = useContext(BlogContext);
  if (post.length === 0) {
    return "Loading...";
  }
  return (
    <div>
      <ol className="orderList">
        {post.map((v) => (
          <li key={v.id} className="list">
            <Link to={`/blogdetail/${v.id}`}>{v.title} </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
