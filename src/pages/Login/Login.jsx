import React from 'react'
import './login.css'
import { handleGoogleAuth } from '../../firebase/googleAuth'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../../firebase/firebase.config'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from '../../features/user/userSlice'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  return (
    <div className="loginpage-main-container">
      <Link to="/">
        <div className="home-link-container">
          <span className="loginPage-home-link">Home</span>
        </div>
      </Link>
      <div className="loginPage-modal-container center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="email" id="email" placeholder="" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="txt_field">
            <input type="password" id="password" placeholder="" required />
            <label htmlFor="password">Password</label>
          </div>
          <input
            className="formSubmitButton"
            type="submit"
            value="Login"
            required
          />

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
    </div>
  )
}

export default Login
