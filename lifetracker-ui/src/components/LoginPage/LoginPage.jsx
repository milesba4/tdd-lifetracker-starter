import * as React from "react";
import "./LoginPage.css";
import LoginForm from "components/LoginForm/LoginForm";
import ActivityPage from "components/ActivityPage/ActivityPage";

export default function LoginPage({isLoggedIn, setIsLoggedIn, handleLoggedIn, loginForm, setLoginForm}){
export default function LoginPage({errors, setErrors, isLoggedIn, setIsLoggedIn, loginForm, setLoginForm}){
    return(
        <div className = "login-page"> 
        {isLoggedIn? <div><ActivityPage/></div> :(<LoginForm loginForm = {loginForm} setLoginForm = {setLoginForm} handleLoggedIn = {handleLoggedIn}/>)}  
        {isLoggedIn? <div><ActivityPage/></div> :(<LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} errors = {errors} setErrors = {setErrors} loginForm = {loginForm} setLoginForm = {setLoginForm} />)}  
        </div>


    
)}