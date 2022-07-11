import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthContextProvider,useAuthContext } from "../../contexts/auth"
import apiClient from "../../services/apiClient";
import Navbar from "components/Navbar/Navbar";
import LandingPage from "components/LandingPage/LandingPage";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage";
import NutritionPage from "components/NutritionPage/NutritionPage";
import NutritionNew from "components/NutritionNew/NutritionNew";
import { NutritionContextProvider } from "../../contexts/nutrition"
export default function AppContainer(){
return(
    <AuthContextProvider>
        <NutritionContextProvider>
          <App />
        </NutritionContextProvider>
      </AuthContextProvider>
)
}

function App() {
  const {user} = useAuthContext()
  const {errors, setErrors} = useAuthContext()

  const[loginForm,setLoginForm] = React.useState({email:"",password:""})
  const[registrationForm, setRegistrationForm]=React.useState({email:"",username:"",firstName:"", lastName:"",password:"", passwordConfirm:""})



  return (
    <div className="app">
      <React.Fragment>
        {
          <BrowserRouter>
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage errors = {errors} setErrors = {setErrors} loginForm = {loginForm} setLoginForm = {setLoginForm} />} />
                <Route path="/register" element={<RegistrationPage errors = {errors} setErrors={setErrors} registrationForm={registrationForm} setRegistrationForm={setRegistrationForm}/>} />
                <Route path="/activity" element={<ActivityPage />} />
                <Route path="/nutrition/*" element={<NutritionPage />}/>
                <Route path="/nutrition/create" element={<NutritionNew />}/>
              </Routes>
            </main>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}
