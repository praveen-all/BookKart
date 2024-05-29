import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Assuming you have the CSS in a separate file

function NavBar() {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> BookKart
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <Link to="/cart" className="fas fa-shopping-cart"></Link>
            <Link to="/login" id="login-btn" className="fas fa-user"></Link>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <Link to="/">home</Link>
            <a href="#featured">featured</a>
            <a href="#">category</a>
            <a href="#reviews">reviews</a>
            <Link to="/feedback">feedback</Link>
          </nav>
        </div>
      </header>
      <nav className="bottom-navbar">
        <Link to="/#home" className="fas fa-home"></Link>
        <Link to="/#featured" className="fas fa-list"></Link>
        <Link to="/#arrivals" className="fas fa-tags"></Link>
        <Link to="/#reviews" className="fas fa-comments"></Link>
        <Link to="/#feedback" className="fas fa-feedback"></Link>
      </nav>
    </>
  );
}

export default NavBar;
