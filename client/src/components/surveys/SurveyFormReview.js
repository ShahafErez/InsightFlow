import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm the survey</h5>
      {reviewFields}
      <button className="btn-flat grey" onClick={onCancel}>
        Edit
      </button>
      <button
        className="btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
