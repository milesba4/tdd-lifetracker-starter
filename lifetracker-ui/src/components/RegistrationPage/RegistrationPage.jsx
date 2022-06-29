import * as React from "react";
import "./RegistrationPage.css";

export default function RegistrationPage({}) {
  return (
    <div class="Register">
      <div class="card">
        <h2>Register</h2>
        <br></br>
        <div class="registration-form">
          <div class="form-input">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              value=""
            ></input>
          </div>
          <div class="form-input">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="your_username"
              value=""
            ></input>
          </div>
          <div class="split-form-input">
            <div class="form-input">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value=""
              ></input>
            </div>
            <div class="form-input">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value=""
              ></input>
            </div>
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value=""
            ></input>
          </div>
          <div class="form-input">
            <label for="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value=""
            ></input>
          </div>
          <button class="submit-registration" style="">
            Create Account
          </button>
        </div>
        <div class="footer">
          <p>
            Already have an account? Login <a href="/login">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
