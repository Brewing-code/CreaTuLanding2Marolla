import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to="/cart"> 🛒
    <span className="cantidadCarrito">0</span>
    </Link>
  )
}

export default CartWidget