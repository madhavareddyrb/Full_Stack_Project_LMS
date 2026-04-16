import { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import HomePage from "./Components/HomePageComponents/HomePage";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import UserDashboard from "./Components/UserProfileComponents/UserDashboard/UserDashboard";
import TeachWithUsHomePage from "./Components/InstructoreComponents/TeachWithUsHomePage/TeachWithUsHomePage";
import Protected_Route from "./Components/Protected_Route/Protected_Route";

function App() {
  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        await axios.get("http://localhost:3000/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        // Token invalid → logout
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };

    verifyUser();
  }, []);
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
