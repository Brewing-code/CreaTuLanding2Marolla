import { Link } from "react-router-dom";

import './NavBar.css'
import CartWidget from '../../common/cartWidget/CartWidget'


const NavBar = () => {
    return (
      <nav className='nav'> 
        <Link to="/"><h1 className="nav-link">Soldier Hops Cerveza</h1></Link>
        <ul>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/category/Birras" className="nav-link">Birras</Link>
        <Link to="/category/Gorras" className="nav-link">Gorras</Link>
        <Link to="/category/Remeras" className="nav-link">Remeras</Link>
        </ul>
        <CartWidget />
      </nav>
      
    )
  }

export default NavBar