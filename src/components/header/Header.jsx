
import './header.css'
import {ReactComponent as DisneyIcon} from '../../assets/images/logo.svg'

import Navbar from '../../components/navbar/Navbar'

const Header = (props) => {
    return ( 
        <div className="header-container">
            <header className='header'>
                <div className="logo-container">
                    <DisneyIcon className='nav-icon' />
                </div>

                <Navbar />
                <div className="login-container">
                    Login
                </div>
            </header>
        </div>

     );
}



export default Header;