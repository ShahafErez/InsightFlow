import { useSelector } from "react-redux";
import formFields from "./formFields";

export default function SurveyFormReview({ onBack, onSubmitSurvey }) {
  const formValues = useSelector((state) => state.surveys.formValues);

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Please confirm the survey</h5>
        {formFields.map(({ label, name }) => (
          <div key={name}>
            <label class="card-subtitle mb-2 text-muted">{label}</label>
            <div>{formValues[name]}</div>
          </div>
        ))}
        <div className="mt-3">
          <button className="btn btn-secondary" onClick={onBack}>
            Edit
          </button>
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              onSubmitSurvey(formValues);
            }}
          >
            Send Survey
          </button>
        </div>
      </div>
    </div>
  );
}
