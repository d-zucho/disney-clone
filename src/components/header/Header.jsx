import './header.css'
import { useEffect } from 'react'
import { ReactComponent as DisneyIcon } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { signInWithPopup } from 'firebase/auth'
// import { handleGoogleAuth } from '../../firebase/googleAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../../firebase/firebase.config'
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from '../../features/user/userSlice'

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        history.push('/home')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName])

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  const handleGoogleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user)
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          history.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <div className="logo-container">
            <DisneyIcon className="disney-icon" />
          </div>
        </Link>
        {!userName ? (
          <div onClick={handleGoogleAuth} className="login-container">
            Login
          </div>
        ) : (
          <>
            <Navbar className="navbar" />
            <div className="SignOut">
              <img className="UserImg" alt="user thumbnail" src={userPhoto} />
              <div className="DropDown">
                <span onClick={handleGoogleAuth} className="sign-out-text">
                  Sign Out
                </span>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  )
}

export default Header
