import React from 'react'
import './login.css'
import { handleGoogleAuth } from '../../firebase/firebase.config'

const Login = (props) => {
  return (
    <div className="container center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className="txt_field">
          <input type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <input className="formSubmitButton" type="submit" value="Login" />

        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
            />
          </div>
          <p onClick={handleGoogleAuth} className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
