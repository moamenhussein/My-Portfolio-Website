import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
const Navbar = () => {
  return (
    <div>
      <ScrollToTop smooth />
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Moamen Hussein
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
