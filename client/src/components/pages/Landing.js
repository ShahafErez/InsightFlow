import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Landing() {
  const auth = useSelector((state) => state.auth);

  const renderAddSurvey = () => (
    <div className="btn btn-floating btn-large add-survey">
      {auth ? (
        <Link to="/surveys/new">{addButton()}</Link>
      ) : (
        <a href="/auth/google">{addButton()}</a>
      )}
    </div>
  );

  function addButton() {
    return (
      <button className="btn btn-primary rounded-circle btn-lg">
        <i className="bi bi-plus" style={{ fontSize: "1.5rem" }}></i>
      </button>
    );
  }

  const renderViewingSurveys = () => (
    <div className="btn" style={{ marginTop: "30px" }}>
      {auth ? (
        <button type="button" className="btn btn-primary">
          <Link
            to="/surveys"
            style={{ color: "black", textDecoration: "none" }}
          >
            View All Surveys
          </Link>
        </button>
      ) : (
        <button type="button" className="btn btn-primary">
          <a
            href="/auth/google"
            style={{ color: "black", textDecoration: "none" }}
          >
            View All Surveys
          </a>
        </button>
      )}
    </div>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <img src="/logo.png" alt="Logo" height="150px" />
      <h2>Collect feedback from your users</h2>
      {renderAddSurvey()}
      {renderViewingSurveys()}
    </div>
  );
}
