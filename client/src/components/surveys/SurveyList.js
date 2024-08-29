import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../slices/surveysSlice";
import SurveyCard from "./SurveyCard";

export default function SurveyList() {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  if (!surveys || surveys.length === 0) {
    return <p>No surveys available.</p>;
  }

  return (
    <div>
      {surveys
        .slice()
        .reverse()
        .map((survey) => (
          <div key={survey._id}>
            <SurveyCard survey={survey} />
          </div>
        ))}
    </div>
  );
}
