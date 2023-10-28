import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
const header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navi">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            <img src="sslogo.jpg" className="logo" alt="home-logo" />
            <p className="spine">Spine <span className="spine-text">Life</span></p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/featuredspine"
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/forus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
              <form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
  
</form>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
