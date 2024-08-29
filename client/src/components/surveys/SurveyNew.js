import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearFormValues,
  setFormValues,
  submitSurvey,
} from "../../slices/surveysSlice";
import SurveyFormCreate from "./SurveyFormCreate";
import SurveyFormReview from "./SurveyFormReview";

export default function SurveyNew() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFormReview, setShowFormReview] = useState(false);

  // Submiting the form to the server
  function onSubmitSurvey(formValues) {
    dispatch(submitSurvey(formValues)).then(() => {
      navigate("/surveys");
    });
  }

  // Processing to the preview page
  function onNext(formValues) {
    dispatch(setFormValues(formValues));
    setShowFormReview(true);
  }

  // Restarting the form
  function onDelete() {
    dispatch(clearFormValues());
    navigate("/");
  }

  return (
    <div style={{ padding: "30px" }}>
      {showFormReview ? (
        <SurveyFormReview
          onBack={() => {
            setShowFormReview(false);
          }}
          onSubmitSurvey={onSubmitSurvey}
          onDelete={onDelete}
        />
      ) : (
        <SurveyFormCreate onNext={onNext} onDelete={onDelete} />
      )}
    </div>
  );
}
