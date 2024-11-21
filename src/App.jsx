import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart.jsx";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import './App.css';
import './components/layouts/navBar/NavBar.css';
import '../src/components/common/productCard/ProductCard.css';
import './components/pages/itemDetail/ItemDetail.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* RUTAS  */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
