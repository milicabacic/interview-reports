import React from "react";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import SingleCandidate from "./pages/SingleCandidate/SingleCandidate";
import Reports from "./pages/Reports/Reports";
import CreateReport from "./pages/CreateReport/CreateReport";
import { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ReactPortal from "./ReactPortal/ReactPortal";
import Modal from "./components/Modal/Modal";
import "./app.scss";

const App = () => {
  const [userToken, setUserToken] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            userToken ? <Navigate to="/reports"></Navigate> : <Login></Login>
          }
        ></Route>
        <Route exact path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/candidates/:id"
          element={<SingleCandidate></SingleCandidate>}
        ></Route>
        <Route
          path="/reports"
          element={
            userToken ? <Reports></Reports> : <Navigate to="/login"></Navigate>
          }
        ></Route>
        <Route
          path="/new-report"
          element={
            userToken ? (
              <CreateReport></CreateReport>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
      </Routes>
      {/* <ReactPortal children={<Modal></Modal>}></ReactPortal> */}
    </>
  );
};

export default App;
