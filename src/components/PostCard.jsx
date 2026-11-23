import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article className="card">
      <Link className="chip small" to={`/category/${post.category.toLowerCase()}`}>
        {post.category}
      </Link>
      <h2>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <div className="meta">
        {post.author} • {post.date} • {post.readTime} min read
      </div>
    </article>
  );
}