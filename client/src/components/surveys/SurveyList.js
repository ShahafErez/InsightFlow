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
              <span className="users-response">Yes: {survey.yes}</span>
              <span className="users-response">No: {survey.no}</span>
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
