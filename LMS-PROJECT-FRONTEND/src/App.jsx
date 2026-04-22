import { useState } from 'react'

import './App.css'
import {Routes, Route, BrowserRouter} from "react-router" 
import HomePage from './Components/HomePageComponents/HomePage';
import SignUp from './Components/Authentication/SignUp/SignUp';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element=<HomePage /> />
          <Route path="signup" element=<SignUp /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
