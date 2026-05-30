import { useContext } from "react";
import { PostContext } from "../provider/PostProvider";

export default function ShowPost() {
  const { post } = useContext(PostContext);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {post.map((p) => (
        <div
          key={p.id}
          className="border border-amber-400 p-1.5  shadow-md rounded-2xl bg-white hover:shadow-lg transition"
        >
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}
