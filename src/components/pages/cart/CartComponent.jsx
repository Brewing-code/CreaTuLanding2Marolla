import { Link } from "react-router-dom";
import './CartComponent.css'

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext);
  let totalAmount = getTotalPrice();

  return (
    <div className="cartdiv">
      {cart.length > 0 ? (
        <>
          <h1>Tus Productos</h1>
          {cart.map((elemento) => {
            return (
              <div key={elemento.id} className="cartproducts">
                <h3>{elemento.title}</h3>
                <h3>Cantidad : {elemento.quantity}</h3>
                <h3>Precio : ${elemento.price}</h3>
                <button
                  className="removeproduct findecompra"
                  onClick={() => removeProduct(elemento.id)}
                >
                  Eliminar producto/s
                </button>
              </div>
            );
          })}
          <div className="cartbuttons">
            <h3 className="totalamount">El total del carrito es : ${totalAmount}</h3>
            <button className="resetcart findecompra" onClick={resetCart}>Limpiar el carrito</button>
            <div className="checkout">
              <Link to="/checkout" className="findecompra">
                Finalizar compra
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h3 className="emptycart">Upss!! Aun no agregaste nada a tu carrito.</h3>
      )}
    </div>
  );
};

export default Cart;
