import React, { useContext } from "react";
import { PostContent } from "../context/PostContext";
import { Link } from "react-router-dom";

export default function Post() {
  const { post } = useContext(PostContent);
  return (
    <div>
      {" "}
      <div className="container">
        {post.map((p) => (
          <div key={p.id} className="list">
            <Link to={`postdetails/${p.id}`}>
              <p>{p.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"addpost"}>
        <button>Add Post</button>
      </Link>
    </div>
  );
}
