import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchUser } from "../slices/authSlice";
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import SurveyNew from "./surveys/SurveyNew";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser()); // Fetch user when component mounts
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/surveys" element={<Dashboard />} />
            <Route exact path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
