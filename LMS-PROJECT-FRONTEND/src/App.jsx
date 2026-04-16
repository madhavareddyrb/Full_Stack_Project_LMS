import { useState } from 'react'

import './App.css'
import {Routes, Route, BrowserRouter} from "react-router" 
import HomePage from './Components/HomePageComponents/HomePage';
import SignUp from './Components/Authentication/SignUp/SignUp';
import SignIn from './Components/Authentication/SignIn/SignIn';
import UserDashboard from './Components/UserProfileComponents/UserDashboard/UserDashboard';
import TeachWithUsHomePage from './Components/InstructoreComponents/TeachWithUsHomePage/TeachWithUsHomePage';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element=<HomePage /> />
          <Route path="signup" element=<SignUp /> />
          <Route path="login" element=<SignIn /> />
          <Route path="userdashboard" element=<UserDashboard /> />

          {/* Teacher DashBoards */}
          <Route path="teachwithus" element=<TeachWithUsHomePage /> />
          <Route path="user/profile" element=<UserDashboard /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
