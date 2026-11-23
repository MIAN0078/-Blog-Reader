import { NavLink } from "react-router-dom";
import { categories } from "../data/posts";

const cls = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          ✍️ DevBlog
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={cls}>
            Home
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c} to={`/category/${c.toLowerCase()}`} className={cls}>
              {c}
            </NavLink>
          ))}
          <NavLink to="/about" className={cls}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}