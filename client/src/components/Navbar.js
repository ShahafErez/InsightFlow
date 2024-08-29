/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";
import Payment from "./Payment";

export default function Navbar() {
  const auth = useSelector((state) => state.auth);

  function renderLoggedInUser() {
    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Credits
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Payment />
            </li>
          </ul>
        </li>
        <li className="nav-item" style={{ marginLeft: "20px" }}>
          Credits:{" "}
          <span style={{ color: "#e56500" }}>{auth?.credits || 0}</span>
        </li>
        <li className="nav-item" style={{ marginLeft: "20px" }}>
          <a href="/api/logout" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );
  }

  function renderGuest() {
    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Register / Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="dropdown-item">
              <a href="/auth/google">Login With Google</a>
            </li>
            <li className="dropdown-item">
              {" "}
              <Link to="/register">Register</Link>
            </li>
            <li className="dropdown-item">
              {" "}
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#d3d3d3", padding: "0 10px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="Logo" width="120" />
        </a>
        {auth ? renderLoggedInUser() : renderGuest()}
      </div>
    </nav>
  );
}
