import { Link, useNavigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Post() {
  const { slug } = useParams(); // /post/what-is-react -> slug = "what-is-react"
  const navigate = useNavigate();

  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];

  if (!post) {
    return (
      <div className="notfound small">
        <h2>Post nahi mili 😕</h2>
        <Link to="/">← Home par wapas jao</Link>
      </div>
    );
  }

  const prev = posts[index - 1];
  const next = posts[index + 1];
  const related = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      <button className="back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <article className="article">
        <Link className="chip small" to={`/category/${post.category.toLowerCase()}`}>
          {post.category}
        </Link>
        <h1>{post.title}</h1>
        <div className="meta">
          {post.author} • {post.date} • {post.readTime} min read
        </div>

        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      <div className="pager">
        {prev ? <Link to={`/post/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link to={`/post/${next.slug}`}>{next.title} →</Link> : <span />}
      </div>

      {related.length > 0 && (
        <section>
          <h3 className="section-title">Related posts</h3>
          <div className="grid">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}