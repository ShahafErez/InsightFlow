import { Link } from "react-router-dom";
import SurveyList from "../surveys/SurveyList";

export default function Dashboard() {
  return (
    <div>
      <h1>All Surveys</h1>
      <SurveyList />
      <div className="fixed-action-btn add-survey">
        <Link to="/surveys/new" className="btn btn-floating btn-large">
          <button className="btn btn-primary rounded-circle btn-lg">
            <i className="bi bi-plus" style={{ fontSize: "1.5rem" }}></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
