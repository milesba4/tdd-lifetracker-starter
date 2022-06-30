import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import LandingPage from "components/LandingPage/LandingPage";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const[registrationForm, setRegistrationForm]=React.useState({email:"",username:"",firstName:"", lastName:"",password:"", passwordConfirm:""})


  function handleLoggedIn(evt){
    setIsLoggedIn(true)
  }
  
 

  return (
    <div className="app">
      <React.Fragment>
        {
          <BrowserRouter>
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage isLoggedIn = {isLoggedIn} handleLoggedIn={handleLoggedIn}/>} />
                <Route path="/register" element={<RegistrationPage registrationForm={registrationForm} setRegistrationForm={setRegistrationForm} isLoggedIn = {isLoggedIn}/>} />
                {/* <Route path="/activity" element={<ActivityPage />} />
                <Route path="/nutrition/*" element={<NutritionPage/>}/> */}
              </Routes>
            </main>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}
