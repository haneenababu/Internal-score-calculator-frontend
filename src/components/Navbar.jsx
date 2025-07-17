import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1c1c1c' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/internalmarks">
            LOGIN
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link text-light" to="/internalmarks">
                ADD MARKS
              </Link>
              <Link className="nav-link text-light" to="/viewall">
                VIEW ALL
              </Link>
              <Link className="nav-link text-danger" to="/">
                ← BACK TO LOGIN
              </Link> {/* Back link added here */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
