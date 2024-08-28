import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Landing() {
  const auth = useSelector((state) => state.auth);

  const renderAddSurvey = () => (
    <div className="btn btn-floating btn-large add-survey">
      {auth ? (
        <Link to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      ) : (
        // todo- change to register component
        <a href="/auth/google">
          <i className="material-icons">add</i>
        </a>
      )}
    </div>
  );

  const renderViewingSurveys = () => (
    <div className="btn" style={{ marginTop: "30px" }}>
      {auth ? (
        <Link to="/surveys">View All Surveys</Link>
      ) : (
        // todo- change to register component
        <a href="/auth/google">View All Surveys</a>
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
