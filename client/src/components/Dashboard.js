import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
const Dashboard = () => {
  return (
    <div>
      <h1>All Surveys</h1>
      <SurveyList />
      <div className=" fixed-action-btn add-survey">
        <Link to={"/surveys/new"} className="btn btn-floating btn-large ">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
