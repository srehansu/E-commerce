// OrderConfirmation.js
import React from 'react';
import styled from 'styled-components';
import { useOrder } from './OrderContext';

const ConfirmationContainer = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ThankYouMessage = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  color: #28a745;
`;
const ConfirmationHeader = styled.h1`
  text-align: center;
  color: #007bff;
`;

const OrderDetailsContainer = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const OrderConfirmation = () => {
  const { orderData } = useOrder();

  return (
    <ConfirmationContainer>
      <ConfirmationHeader>Order Confirmation</ConfirmationHeader>
      <OrderDetailsContainer>
        <p>
          <DetailLabel>First Name:</DetailLabel> {orderData.firstName}
        </p>
        <p>
          <DetailLabel>Last Name:</DetailLabel> {orderData.lastName}
        </p>
        <p>
          <DetailLabel>Address:</DetailLabel> {orderData.address}
        </p>
        <p>
          <DetailLabel>City:</DetailLabel> {orderData.city}
        </p>
        <p>
          <DetailLabel>Zip Code:</DetailLabel> {orderData.zipCode}
        </p>
        <p>
          <DetailLabel>District:</DetailLabel> {orderData.district}
        </p>
        <p>
          <DetailLabel>State:</DetailLabel> {orderData.state}
        </p>
        {/* Add other order details here */}
      </OrderDetailsContainer>
      <ThankYouMessage>Thank you for your order!</ThankYouMessage>
      <p>
          <DetailLabel>Delivery Date: 24/01/24</DetailLabel>
        </p>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;