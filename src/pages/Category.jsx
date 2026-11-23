import { Link, useParams } from "react-router-dom";
import { categories, posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Category() {
  const { name } = useParams(); // /category/react -> name = "react"

  // URL chhote letters mein hota hai, isliye lowercase mein compare karo
  const category = categories.find((c) => c.toLowerCase() === name.toLowerCase());

  if (!category) {
    return (
      <div className="notfound small">
        <h2>Ye category maujood nahi 😕</h2>
        <Link to="/">← Home par wapas jao</Link>
      </div>
    );
  }

  const list = posts.filter((p) => p.category === category);

  return (
    <>
      <h1 className="page-title">
        {category} <span className="count">({list.length} posts)</span>
      </h1>
      <div className="grid">
        {list.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </>
  );
}