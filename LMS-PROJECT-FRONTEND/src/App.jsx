import { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePageComponents/HomePage";

import SignIn from "./Components/Authentication/SignIn/SignIn";
import UserDashboard from "./Components/UserProfileComponents/UserDashboard/UserDashboard";
import TeachWithUsHomePage from "./Components/InstructoreComponents/TeachWithUsHomePage/TeachWithUsHomePage";
import Protected_Route from "./Components/Protected_Route";
import InstructorForm from "./Components/InstructoreComponents/InstructoreForm/InstructoreForm";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import InstructorDashboard from "./Components/InstructoreComponents/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./Components/InstructoreComponents/InstructorDashboard/InstructorCourses/InstructorCourses";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes  */}
          <Route path="" element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="teachwithus" element={<TeachWithUsHomePage />} />

          {/* Teacher DashBoards */}
          <Route
            path="user/profile"
            element={
              <Protected_Route>
                <UserDashboard />
              </Protected_Route>
            }
          />

          <Route
            path="/instructor/form"
            element={
              <Protected_Route>
                {" "}
                <InstructorForm />{" "}
              </Protected_Route>
            }
          />
          <Route
            path="/instructor/dashboard"
            element={
              <Protected_Route>
                <InstructorDashboard />
              </Protected_Route>
            }
          />
          <Route
            path="/instructor/courses"
            element={
              <Protected_Route>
                <InstructorCourses />
              </Protected_Route>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
