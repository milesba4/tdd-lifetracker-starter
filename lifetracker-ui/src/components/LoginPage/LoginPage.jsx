import * as React from "react";
import "./LoginPage.css";
import LoginForm from "components/LoginForm/LoginForm";

export default function LoginPage({isLoggedIn, setIsLoggedIn, handleLoggedIn, loginForm, setLoginForm}){
    return(
        <div className = "login-page"> 
        {isLoggedIn? <div> You clicked the login button</div> :(<LoginForm loginForm = {loginForm} setLoginForm = {setLoginForm} handleLoggedIn = {handleLoggedIn}/>)}  
        </div>


    
)}