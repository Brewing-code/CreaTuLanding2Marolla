import { useState } from 'react'
import './Counter.css'
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';

const Counter = ({ product }) => {
    const {addToCart} = useContext(CartContext);
    const [count, setCount]= useState(1);
    
    const handleIncrement = () => {
        if(count < product.stock){
            setCount(count + 1);
        };
    };

    const handleDecrement = () => {
        if(count > 1){
            setCount(count - 1);
        };
    };

    const onAdd = () => {
        let cartProduct = {...product, quantity: count};
        addToCart(cartProduct);
    }

    return(
        <div className='container'>
            <div className='buttons'>
                <button onClick={handleDecrement} className='decrement'> - </button>
                <span className='counter'>{count}</span>
                <button onClick={handleIncrement} className='increment'> + </button>
                <button onClick={onAdd} className='addtocart'>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Counter