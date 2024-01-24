// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity || 1;
      setCart(updatedCart);
    } else {
      // Product is not in the cart, add it with a default quantity of 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
  };

  const removeProduct = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeProduct, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
