import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  function renderContent() {
    if (!auth) {
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    }

    return (
      <>
        <li className="payment" key="1">
          <Payment />
        </li>
        <li key="2" style={{ margin: "0 10px" }}>
          Credits: <span style={{ color: "#e56500" }}>{auth.credits}</span>
        </li>
        <li key="3">
          <a href="/api/logout">Logout</a>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}
