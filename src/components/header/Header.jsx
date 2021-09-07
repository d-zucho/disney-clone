import './header.css'
import { ReactComponent as DisneyIcon } from '../../assets/images/logo.svg'

import Navbar from '../../components/navbar/Navbar'
import { handleGoogleAuth } from '../../firebase/firebase.config'

const Header = (props) => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
          <DisneyIcon className="disney-icon" />
        </div>
        <Navbar className="navbar" />
        <div onClick={handleGoogleAuth} className="login-container">
          Login
        </div>
      </header>
    </div>
  )
}

export default Header
