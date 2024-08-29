import { useSelector } from "react-redux";
import formFields from "./formFields";

export default function SurveyFormReview({ onBack, onSubmitSurvey }) {
  const formValues = useSelector((state) => state.surveys.formValues);

  const reviewFields = formFields.map(({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm the survey</h5>
      {reviewFields}
      <button className="btn-flat grey" onClick={onBack}>
        Edit
      </button>
      <button
        className="btn btn-flat right"
        onClick={() => {
          onSubmitSurvey(formValues);
        }}
      >
        Send Survey
      </button>
    </div>
  );
}
