import React, { useState } from 'react';
import { createContext } from 'react'; 

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = ( product ) => {
        setCart([...cart, product]);        
    };  
    const resetCart = () => {
        setCart([]);
    };
    const removeProduct = (id) => {
        let newCart = cart.filter((elemento)=>elemento.id !== id);
        setCart(newCart);
    };
    const getTotalPrice = () =>{
        let total = cart.reduce((total, elemento)=>{
            return total + elemento.price * elemento.quantity;
        }, 0);
        console.log(total)
        return total;
        
    };
    let data = {cart, addToCart, resetCart, removeProduct, getTotalPrice};
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};