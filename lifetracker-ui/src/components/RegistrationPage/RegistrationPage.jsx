import * as React from "react";
import "./RegistrationPage.css";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
export default function RegistrationPage({isLoggedIn}) {
  return (
    <div className="registration-page">
    {isLoggedIn? <div>You are logged in already</div> :(<RegistrationForm/>)} 
      
    </div>
  );
}
