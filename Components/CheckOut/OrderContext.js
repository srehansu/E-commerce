// OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({});
  
  const setOrder = (data) => {
    setOrderData(data);
  };

  return (
    <OrderContext.Provider value={{ orderData, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
