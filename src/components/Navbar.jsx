import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <a href="/create" className="nav-link">
            Writing Article
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
