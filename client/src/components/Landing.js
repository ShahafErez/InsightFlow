import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends Component {
  renderAddSurvey() {
    return (
      <div className="btn btn-floating btn-large add-survey">
        {this.props.auth ? (
          <Link to={this.props.auth ? "/surveys/new" : "/auth/google"}>
            <i className="material-icons">add</i>
          </Link>
        ) : (
          <a href="/auth/google">
            <i className="material-icons">add</i>
          </a>
        )}
      </div>
    );
  }

  rednerViewingSurveys() {
    return (
      <div className="btn" style={{ marginTop: "30px" }}>
        {this.props.auth ? (
          <Link to="/surveys">View All Surveys</Link>
        ) : (
          <a href="/auth/google">View All Surveys</a>
        )}
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img src="/logo.png" alt="Logo" height="150px" />
        <h2>Collect feedback from your users</h2>
        {this.renderAddSurvey()}
        {this.rednerViewingSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
