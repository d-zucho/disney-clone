import React from 'react'
// import { Link } from 'react-router-diom'

const SignIn = (props) => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="login-container">
          <h2>I already have an account</h2>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" required />
          <label htmlFor="password">Password: </label>
          <input type="password" required />

          <label htmlFor="confirm-password"></label>
          <input type="password" name="password" id="confirm-password" />
        </div>
      </div>
    </div>
  )
}

export default SignIn
