import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {
  const { cart } = useContext(CartContext); 
  
  


  return ( 
    <Link to="/cart"> 🛒
    <span className="cantidadCarrito">{cart.length}</span>
    </Link>
  )
}

export default CartWidget