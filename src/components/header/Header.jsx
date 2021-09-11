import './header.css'
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
  setUserLoginDetails,
} from '../../features/user/userSlice'

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

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
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
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
            <img className="user-photo" alt="user thumbnail" src={userPhoto} />
          </>
        )}
      </header>
    </div>
  )
}

export default Header
