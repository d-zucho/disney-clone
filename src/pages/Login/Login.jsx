import React from 'react'
import './login.css'
// import { Link } from 'react-router-diom'

const Login = (props) => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="login-email-container">
          <h2>I already have an account</h2>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" required />
          <label htmlFor="password">Password: </label>
          <input type="password" required />

          <label htmlFor="confirm-password"></label>
          <input type="password" name="password" id="confirm-password" />
        </div>

        <div className="login-signin-container">
          <h2>Sign In</h2>
          <div className="credentials">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required />
            <label htmlFor="password">Password: </label>
            <input type="password" required />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
