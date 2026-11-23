import { NavLink, Outlet } from "react-router-dom";

const cls = ({ isActive }) => (isActive ? "tab active" : "tab");

export default function About() {
  return (
    <>
      <h1 className="page-title">About</h1>

      <div className="tabs">
        <NavLink to="/about" end className={cls}>
          Our Story
        </NavLink>
        <NavLink to="/about/contact" className={cls}>
          Contact
        </NavLink>
      </div>

      <div className="box">
        <Outlet />
      </div>
    </>
  );
}