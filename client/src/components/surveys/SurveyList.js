/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  rednerSurvets() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card " key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.rednerSurvets()}</div>;
  }
}

function mapStateToProps(state) {
  console.log("!! state ", state);
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
