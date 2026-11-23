import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Ye page maujood nahi hai 😕</p>
      <Link className="btn" to="/">
        Home par jao
      </Link>
    </div>
  );
}