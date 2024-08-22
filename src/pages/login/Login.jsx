/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Login.css';
import skz from '../../assets/skz.png';

const Login = () => {

  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login'>
      <img src={skz} alt="" className='logo' />
      <form className='login-form'>
        <h2>{currState}</h2>
        <input type='text' placeholder='Username' className='form-input' required/>
        {
          currState === "Sign Up" ? 
          <input type='email' placeholder='Email' className='form-input' required/> :
          null
        }
        <input type='password' placeholder='Password' className='form-input' required/>
        <button type='submit' className='form-button'>
          {
            currState === "Sign Up" ? 
            "Create Account" : 
            "Login"
          }
        </button>
        <div className='login-term'>
          <input type='checkbox' /> 
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className='login-forgot'>
          {
            currState === "Sign Up"?
          <p className='login-toggle'>Already have an account? <span onClick={() => setCurrState("Login")}>Login now!</span></p> :
          <p className='login-toggle'>Don't you have an account? <span onClick={() => setCurrState("Sign Up")}>Create one!</span></p>                   
          }


        </div>
      </form>
    </div>
  )
}

export default Login
