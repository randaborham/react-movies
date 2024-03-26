import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg  w-100`}
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="container">
        <Link
          className=""
          to="/"
          style={{ textDecoration: "none", fontSize: "30px", color: "white" }}
        >
          TRENDING
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-lg-3 text-white m-3">
            <li className="nav-item me-3">
              <NavLink className="nav-link px-2 text-white mb-2 " to="/">
                Movies
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link px-2 text-white mb-2 " to="About">
                TV
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link px-2 text-white mb-2 " to="Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
