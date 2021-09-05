import { Link } from 'react-router-dom';
import {ReactComponent as HomeIcon} from '../../assets/images/home-icon.svg'
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg'
import {ReactComponent as WatchlistIcon} from '../../assets/images/watchlist-icon.svg'
import {ReactComponent as OriginalsIcon} from '../../assets/images/original-icon.svg'
import {ReactComponent as MoviesIcon} from '../../assets/images/movie-icon.svg'
import {ReactComponent as DisneyIcon} from '../../assets/images/logo.svg'

import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav-menu">
            {/* <Link to='#' className='home-link'>
                <DisneyIcon className='nav-icon' />
            </Link> */}
            <Link className='home-link' to='#'>
                <HomeIcon className='home-icon nav-icon' />
                <span>Hello</span>
            </Link>
            <Link className='home-link' to='#'>
                <SearchIcon className='nav-icon' />
                <span>Search</span>
            </Link>
            <Link className='home-link' to='#'>
                <WatchlistIcon className='nav-icon' />
                <span>Watchlist</span>
            </Link>
            <Link className='home-link' to='#'>
                <OriginalsIcon className='nav-icon' />
                <span>Originals</span>
            </Link>
            <Link className='home-link' to='#'>
                <MoviesIcon className='nav-icon' />
                <span>Movies</span>
            </Link>
                </div>
     );
}
 
export default Navbar;