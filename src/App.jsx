import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartComponent from "./components/pages/cart/CartComponent";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import MyCarousel from "./components/common/carousel/Carousel";
import { CartContextProvider } from "./context/CartContext";
import './App.css';
import './components/layouts/navBar/NavBar.css';
import './components/common/productCard/ProductCard.css';
import './components/pages/itemDetail/ItemDetail.css';
import Footer from "./components/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter className="wrapper">
      <CartContextProvider>
        <div className="wrapper">
          <Navbar />
          <main>
            <Routes>
              {/* Define routes for the application */}
              <Route path="/" element={<MyCarousel />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartComponent />} />
              <Route path="/itemDetail/:id" element={<ItemDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;