import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PaymentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PaymentMethod = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const PaymentTitle = styled.h2`
  color: #333;
`;

const PaymentText = styled.p`
  color: #666;
`;

const PaymentDetails = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
`;

const PaymentInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [ewalletType, setEwalletType] = useState('');
  const [ewalletAccount, setEwalletAccount] = useState('');

  const handleMethodClick = (method) => {
    setSelectedMethod(method === selectedMethod ? null : method);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };


  return (
    <PaymentContainer>
      <h1>Payment Methods</h1>

      <PaymentMethod onClick={() => handleMethodClick('bank')}>
        <PaymentTitle>Bank Transfers</PaymentTitle>
        <PaymentText>Make a payment through bank transfer using the following details.</PaymentText>
        {selectedMethod === 'bank' && (
          <PaymentDetails onClick={stopPropagation}>
            <label>
              Account Number:
              <PaymentInput
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </label>
            <label>
              Bank Name:
              <PaymentInput
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </label>
          </PaymentDetails>
        )}
      </PaymentMethod>

      <PaymentMethod onClick={() => handleMethodClick('online')}>
        <PaymentTitle>Online (Card) Payment</PaymentTitle>
        <PaymentText>Securely pay with your credit or debit card online.</PaymentText>
        {selectedMethod === 'online' && (
          <PaymentDetails onClick={stopPropagation}>
            <label>
              Card Type:
              <PaymentInput
                type="text"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
              />
            </label>
            <label>
              Card Number:
              <PaymentInput
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>
          </PaymentDetails>
        )}
      </PaymentMethod>

      <PaymentMethod onClick={() => handleMethodClick('ewallet')}>
        <PaymentTitle>E-wallet</PaymentTitle>
        <PaymentText>Use your favorite e-wallet for a quick and convenient payment experience.</PaymentText>
        {selectedMethod === 'ewallet' && (
          <PaymentDetails onClick={stopPropagation}>
            <label>
              E-wallet Type:
              <PaymentInput
                type="text"
                value={ewalletType}
                onChange={(e) => setEwalletType(e.target.value)}
              />
            </label>
            <label>
              Account:
              <PaymentInput
                type="text"
                value={ewalletAccount}
                onChange={(e) => setEwalletAccount(e.target.value)}
              />
            </label>
          </PaymentDetails>
        )}
      </PaymentMethod>

      <PaymentMethod onClick={() => handleMethodClick('cash')}>
        <PaymentTitle>Cash</PaymentTitle>
        <PaymentText>Pay in cash at our physical location or through a cash-on-delivery service.</PaymentText>
        {selectedMethod === 'cash' && (
          <PaymentDetails>
            {/* Add cash payment details here */}
            <p>Instruction <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            {/* Add other cash payment details here */}
          </PaymentDetails>
        )}
      </PaymentMethod>

      <ButtonsContainer>
        <PaymentButton>
          <Link to="/OrderConfirmation" style={{ color: 'inherit', textDecoration: 'none' }}>
            Submit Payment
          </Link>
        </PaymentButton>

        <CancelButton>
          <Link to="/CheckOut" style={{ color: 'inherit', textDecoration: 'none' }}>
            Cancel
          </Link>
        </CancelButton>
      </ButtonsContainer>
    </PaymentContainer>
  );
};

export default Payment;
