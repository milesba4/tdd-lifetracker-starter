import * as React from "react";
import "./LoginPage.css";
import LoginForm from "components/LoginForm/LoginForm";

export default function LoginPage({isLoggedIn, setIsLoggedIn}){
    return(
        <div className = "login-page"> 
        {isLoggedIn? <div> You clicked the login button</div> :(<LoginForm />)}  
        </div>


    
)}