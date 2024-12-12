import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore'
import './checkout.css'
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {cart, getTotalPrice, resetCart} = useContext(CartContext)
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });
  const [orderId, setOrderId] = useState(null);

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const funcionDelFormulario = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total, 
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then((res) => setOrderId(res.id));
    resetCart();

    let productsCollection = collection(db, "products");
    order.items.forEach( (elemento) =>{
      let refDoc = doc(productsCollection, elemento.id)
      updateDoc(refDoc, {stock: elemento.stock - elemento.quantity})
      .catch((err) => {
        console.error(`Error actualizando el stock del producto ${elemento.id}:`, err);
      });
    });
  };


  return (
    <div className="form-container">
      <h2>Completa el formulario con tus datos</h2>
      {
        orderId ? (
          <div>
            <h2>¡Gracias por tu compra!</h2>
            <h2>Tu numero de orden es :{orderId}</h2>
          </div>
        ) : (

      <form className="form-inputs"onSubmit={funcionDelFormulario}>
        <input className="name"
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={capturarDatos}
        />
        <input className="email"
          type="text"
          placeholder="E-mail"
          name="userEmail"
          onChange={capturarDatos}
        />
        <input className="phone"
          type="text"
          placeholder="Telefono"
          name="telefono"
          onChange={capturarDatos}
        />
        <div className="buttons-send-back">
          <button className="findecompra buttons-send-back"> Enviar </button>
          <button className="findecompra buttons-send-back" onClick={() => navigate("/cart")} > Volver </button>
        </div>
      </form>
        )
      }
    </div>
  );
};

export default Checkout;
