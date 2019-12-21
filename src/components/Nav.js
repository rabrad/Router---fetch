import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          Home
        </Link>
        <Link to="/user" style={navStyle}>
          User
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
