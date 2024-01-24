// ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const resetSelectedProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, selectProduct, resetSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
