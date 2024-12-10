import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import './Cartwidget.css'

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <Link to="/cart">
      <ShoppingCartSharpIcon className='cart-icon'></ShoppingCartSharpIcon>{totalItems > 0 && <span className="cantidadCarrito">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;