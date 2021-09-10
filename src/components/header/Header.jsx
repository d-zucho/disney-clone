import './header.css'
import { ReactComponent as DisneyIcon } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { handleGoogleAuth } from '../../firebase/firebase.config'

const Header = (props) => {
  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <div className="logo-container">
            <DisneyIcon className="disney-icon" />
          </div>
        </Link>
        <Navbar className="navbar" />
        <div onClick={handleGoogleAuth} className="login-container">
          Login
        </div>
        {/* <Link to="/login">
          <div className="login-container">Login</div>
        </Link> */}
      </header>
    </div>
  )
}

export default Header
