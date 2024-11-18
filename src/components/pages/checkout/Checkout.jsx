import { useState } from "react";

const Checkout = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const funcionDelFormulario = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Aca el formulario de compra</h2>
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
    </div>
  );
};

export default Checkout;
