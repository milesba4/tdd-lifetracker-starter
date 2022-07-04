import * as React from "react";
import "./RegistrationPage.css";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
export default function RegistrationPage({registrationForm, setRegistrationForm,isLoggedIn, errors, setErrors}) {
  return (
    <div className="registration-page">
    {isLoggedIn? <div>You are logged in already</div> :(<RegistrationForm errors = {errors} setErrors={setErrors} registrationForm={registrationForm} setRegistrationForm={setRegistrationForm}/>)} 
      
    </div>
  );
}
