import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            const newQuantity = productInCart.quantity + product.quantity;
            if (newQuantity <= product.stock) {
                const updatedCart = cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                setCart(updatedCart);
            } else {
                alert(`No puedes agregar más de ${product.stock} unidades.`);
            }
        } else {
            if (product.quantity <= product.stock) {
                setCart([...cart, product]);
            } else {
                alert(`No puedes agregar más de ${product.stock} unidades.`);
            }
        }
    };

    const resetCart = () => setCart([]);
    const removeProduct = (id) => setCart(cart.filter((item) => item.id !== id));

    const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
    const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, resetCart, removeProduct, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};