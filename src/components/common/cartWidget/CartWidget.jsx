import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <Link to="/cart">
      🛒 {totalItems > 0 && <span className="cantidadCarrito">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;