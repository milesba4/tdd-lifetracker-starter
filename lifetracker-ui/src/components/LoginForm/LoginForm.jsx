import * as React from "react";
import {Link } from "react-router-dom";

import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./LoginForm.css";
import axios from "axios";

export default function LoginForm({loginForm, setLoginForm, handleLoggedIn}) {
export default function LoginForm({errors, setErrors, loginForm, setLoginForm,isLoggedIn, setIsLoggedIn}) {
  let navigate = useNavigate()
  // const navigate = useNavigate()
  console.log("loginForm=",loginForm)
  function handleOnLoginChange(evt){
    setLoginForm((f) => ({...f, [evt.target.name]: evt.target.value}))
    console.log("loginFormAfter=",loginForm)
  }

  return (
    <div class="Login">
      <div class="card">
        <h2>Login</h2>
        <br></br>
        <div class="login-form">
          <div class="form-input">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={loginForm.email}
              onChange={handleOnLoginChange}
            ></input>
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={loginForm.password}
              onChange = {handleOnLoginChange}
            ></input>
          </div>
          <button className="submit-login" onClick = {()=>{handleLoggedIn}}>Login</button>
        </div>
        <div class="footer">
          <p>
            Don't have an account? Sign up <Link to ="/register">here.</Link> 
          </p>
        </div>
      </div>
    </div>
  );
}
