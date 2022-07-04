import * as React from "react";
import "./RegistrationForm.css";
import axios from "axios";
import {useNavigate } from "react-router-dom"


export default function RegistrationForm({errors,setErrors, registrationForm,setRegistrationForm}) {
  const navigate = useNavigate()
  
  const handleOnRegistrationChange = (evt) => {
     setRegistrationForm((f) => ({ ...f, [evt.target.name]:evt.target.value }))
     console.log("RegForm=",registrationForm)
  }


  const signupUser = async (evt) => {
    console.log("works")
    evt.preventDefault()
    // setIsLoading(true)
    if(registrationForm.email == "" ||  registrationForm.password == "" ||  registrationForm.firstName == "" ||  registrationForm.lastName == "" ||  registrationForm.passwordConfirm == "" ||  registrationForm.username == ""){
      setErrors("Missing Field")
      console.log(errors)
      console.log("works2")
    }

   else if(registrationForm.passwordConfirm !== registrationForm.password){
      setErrors("passwords don't match")
      console.log(errors)
      console.log("works3")
   }
   else if(registrationForm.email.indexOf("@") <= 0){
    setErrors("Invalid email")
    console.log(errors)
    console.log("works4")
    
  }

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: registrationForm.username,
        lastName: registrationForm.lastName,
        firstName: registrationForm.firstName,
        email: registrationForm.email,
        password: registrationForm.password
      })
      console.log("works5")
      console.log("response reg=", response)
      
      if (response?.data?.user) {
        setErrors("")
        navigate("/login")
        setIsLogged(true)
        console.log("yo",errors)
        setRegistrationForm({"email" : "", "username" : "", "fisrtName" : "", "lastName" : "", "password" : "", "passwordConfirm" : ""})
        console.log("works6")
      } 
    } catch(err) {
      if(errors == ""){
      setErrors("Email or Username already in use")
      console.log("current error=", errors)
      console.log("works7")
      }
    } 
  }
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
            defaultValue= {registrationForm.email}
            onChange ={handleOnRegistrationChange} 
          ></input>
        </div>
        <div className="form-input">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="your_username"
            value={registrationForm.username}
            onChange ={handleOnRegistrationChange} 
          ></input>
        </div>
        <div className="split-form-input">
          <div className="form-input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={registrationForm.firstName}
              onChange ={handleOnRegistrationChange} 
            ></input>
          </div>
          <div className="form-input">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={registrationForm.lastName}
              onChange ={handleOnRegistrationChange}
            ></input>
          </div>
        </div>
        <div className="form-input">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a secure password"
            value={registrationForm.password}
            onChange ={handleOnRegistrationChange}
          ></input>
        </div>
        <div className="form-input">
          <label for="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm your password"
            value={registrationForm.passwordConfirm}
            onChange ={handleOnRegistrationChange}
          ></input>
              {/* {errors == 3 ?  <span className="error">Passwords don't match</span>: null}
            {errors == 0 ?  <span className="error">You're missing an input value</span>: null} */}
        </div>
        <button className="submit-registration" onClick={signupUser}>
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
