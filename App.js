import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import About from './COMPONENTS/About';
import ContactUs from './COMPONENTS/ContactUs/ContactUs';
import Product from './COMPONENTS/Product/Product';
import FAQPage from './COMPONENTS/FAQPage';
import Navbar from './Navbar';
import Payment from './COMPONENTS/CheckOut/Payment';
import ProductDescription from './COMPONENTS/Product/ProductDescription';
import AddtoCart from './COMPONENTS/Product/AddtoCart';
import CheckOut from './COMPONENTS/CheckOut/CheckOut';
import Delivery from './COMPONENTS/ContactUs/Delivery';
import ErrorPage from './ErrorPage';
import { CartProvider } from './COMPONENTS/Product/CartContext';
import OrderConfirmation from './COMPONENTS/CheckOut/OrderConfirmation'; // Corrected import
import { OrderProvider } from './COMPONENTS/CheckOut/OrderContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Footer = styled.footer`
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;
const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <CartProvider>
          <OrderProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/product" element={<Product />} />
              <Route path="/FAQPage" element={<FAQPage />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/ProductDescription/:id" element={<ProductDescription />} />
              <Route path="/AddtoCart" element={<AddtoCart />} />
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route path="/Delivery" element={<Delivery />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
            </Routes>
            <Footer>
              <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </Footer>
          </OrderProvider>
        </CartProvider>
      </Router>
    </AppContainer>
  );
};

export default App;
