import { Link } from "react-router-dom";

import './NavBar.css'
import CartWidget from '../../common/cartWidget/CartWidget'


const NavBar = () => {
    return (
      <nav className='nav'> 
        <Link to="/" className="logo-container"><img className="logo" src="https://res.cloudinary.com/djoumjsq8/image/upload/v1734022728/logo_Soldier_e8rool.png"></img></Link>
        <ul>
        <Link to="/" className="nav-link">Novedades</Link>
        <Link to="/category/Birras" className="nav-link">Birras</Link>
        <Link to="/category/Gorras" className="nav-link">Gorras</Link>
        <Link to="/category/Remeras" className="nav-link">Remeras</Link>
        </ul>
        <CartWidget />
      </nav>
      
    )
  }

export default NavBar