import * as React from "react";
import "./LoginPage.css";


export default function LoginPage({isLoggedIn, setIsLoggedIn}){
    return(
        <div className = "login-page">
        {isLoggedIn? null :(<LoginForm/>)}
        </div>



    
)}