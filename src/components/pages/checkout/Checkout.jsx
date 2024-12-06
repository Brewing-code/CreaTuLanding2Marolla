import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore'

const Checkout = () => {
  const {cart, getTotalPrice, resetCart} = useContext(CartContext)
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
    <div>
      <h2>Aca el formulario de compra</h2>
      {
        orderId ? (
          <div>
            <h2>¡Gracias por tu compra!</h2>
            <h2>Tu numero de orden es :{orderId}</h2>
          </div>
        ) : (

      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="email"
          name="userEmail"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={capturarDatos}
        />
        <button> enviar </button>
        <button type="button"> cancelar </button>
      </form>
        )
      }
    </div>
  );
};

export default Checkout;
