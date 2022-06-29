import * as React from "react";
import "./LoginForm.css";

export default function LoginForm({}) {
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
              value=""
            ></input>
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value=""
            ></input>
          </div>
          <button class="btn" onClick = {()=>{handleLoggedIn()}}>Login</button>
          <button className="submit-login" onClick = {()=>{handleLoggedIn()}}>Login</button>
        </div>
