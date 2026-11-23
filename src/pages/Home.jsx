import { Link, useSearchParams } from "react-router-dom";
import { categories, posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Home() {
  const [params, setParams] = useSearchParams();

  // URL: /?q=react&sort=oldest
  const q = params.get("q") || "";
  const sort = params.get("sort") || "newest";

  const updateParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || (key === "sort" && value === "newest")) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const filtered = posts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(q.toLowerCase())
    )
    .sort((a, b) =>
      sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    );

  return (
    <>
      <section className="hero">
        <h1>Learn web development 🚀</h1>
        <p>Simple articles on React, JavaScript, CSS and career tips.</p>
      </section>

      <div className="chips">
        {categories.map((c) => (
          <Link key={c} className="chip" to={`/category/${c.toLowerCase()}`}>
            {c}
          </Link>
        ))}
      </div>

      <div className="toolbar">
        <input
          className="input"
          placeholder="Search posts..."
          value={q}
          onChange={(e) => updateParam("q", e.target.value)}
        />
        <select
          className="input select"
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      {filtered.length === 0 && <p className="empty">Koi post nahi mili 📭</p>}
    </>
  );
}