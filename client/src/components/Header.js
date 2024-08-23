import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="1" className="payment">
            <Payment />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits:{" "}
            <span style={{ color: "#e56500" }}>{this.props.auth.credits}</span>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to={"/"} className="logo">
            <img src="/logo.png" alt="Logo" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
