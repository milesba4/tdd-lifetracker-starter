import * as React from "react";
import "./RegistrationForm.css";

export default function RegistrationForm({}) {
export default function RegistrationForm({registrationForm,setRegistrationForm}) {
  return (
    <div className="card">
      <h2>Register</h2>
      <br></br>
      <div className="registration-form">
        <div className="form-input">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email"
            value=""
          ></input>
        </div>
        <div className="form-input">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="your_username"
            value=""
          ></input>
        </div>
        <div className="split-form-input">
          <div className="form-input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value=""
            ></input>
          </div>
          <div className="form-input">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value=""
            ></input>
          </div>
        </div>
        <div className="form-input">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a secure password"
            value=""
          ></input>
        </div>
        <div className="form-input">
          <label for="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm your password"
            value=""
          ></input>
        </div>
        <button className="submit-registration">
          Create Account
        </button>
      </div>
      <div className="footer">
        <p>
          Already have an account? Login <a href="/login">here</a>
        </p>
      </div>
    </div>
  );
}
