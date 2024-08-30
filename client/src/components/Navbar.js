/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/authSlice";
import Login from "./Login";
import Payment from "./Payment";
import Register from "./Register";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  function handleLogout() {
    navigate("/");
    dispatch(logoutUser());
  }

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
          <button className="nav-link" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    );
  }

  function renderAuthentication(type) {
    return (
      <div
        className="modal fade"
        id={`model${type}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {type}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {type === "Register" && (
                <div>
                  <a href="/auth/google">Register With Google</a>
                  <Register />
                </div>
              )}
              {type === "Login" && (
                <div>
                  <a href="/auth/google">Login With Google</a>
                  <Login />
                </div>
              )}
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
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
        {auth ? (
          renderLoggedInUser()
        ) : (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <button
                type="button"
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#modelRegister"
              >
                Register
              </button>
            </li>
            <li className="nav-item" style={{ marginLeft: "20px" }}>
              <button
                type="button"
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#modelLogin"
              >
                Login
              </button>
            </li>
          </ul>
        )}
      </div>
      {renderAuthentication("Register")}
      {renderAuthentication("Login")}
    </nav>
  );
}
