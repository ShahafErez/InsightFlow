import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../slices/surveysSlice";
import SurveyCard from "./SurveyCard";

export default function SurveyList() {
  const surveysList = useSelector((state) => state.surveys.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  return (
    <div>
      {!surveysList || surveysList.length === 0 ? (
        <p>You don't have serveys yet</p>
      ) : (
        surveysList.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))
      )}
    </div>
  );
}
