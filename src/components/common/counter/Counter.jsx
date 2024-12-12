import { useState } from 'react';
import './counter.css';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const Counter = ({ product }) => {
    const { addToCart, cart } = useContext(CartContext);
    const [count, setCount] = useState(1);

    // Calcular cantidad añadida y stock restante
    const addedQuantity = cart.filter((item) => item.id === product.id).reduce((total, item) => total + item.quantity, 0);
    const remainingStock = product.stock - addedQuantity;

// Incrementar cantidad
    const handleIncrement = () => {
        if (count < remainingStock) {
            setCount(count + 1);
        }
    };

   
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    
    const onAdd = () => {
        let cartProduct = { ...product, quantity: count };
        addToCart(cartProduct);
        setCount(1); 
    };

   
    if (remainingStock <= 0) {
        return (
            <div>
                <h2>Producto sin stock</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="buttons">
                <button onClick={handleDecrement} className="quantity" disabled={count <= 1}> - </button>
                <span className="counter">{count}</span>
                <button onClick={handleIncrement} className="quantity" disabled={count >= remainingStock}> + </button>
                <button onClick={onAdd} className="quantity" disabled={count > remainingStock}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Counter;