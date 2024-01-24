// DeliveryPage.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  color: #555;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #777;
  line-height: 1.5;
`;

const OrderTrackingForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  margin-left:1rem;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// React component
const DeliveryPage = () => {
  return (
    <Container>
      <Section>
        <Title>Delivery Options</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tortor vel justo
          ultrices fermentum vel id neque.
        </Paragraph>
        {/* Add more information about delivery options */}
      </Section>

      <Section>
        <Title>Order Tracking</Title>
        <Paragraph>
          Track the status of your order by entering your order number and email address below.
        </Paragraph>

        <OrderTrackingForm>
          <div>
            <FormLabel>Order Number:</FormLabel>
            <FormInput type="text" />
          </div>
          <div>
            <FormLabel>Email Address:</FormLabel>
            <FormInput type="email" />
          </div>
          <SubmitButton type="submit">Track Order</SubmitButton>
        </OrderTrackingForm>
      </Section>

      <Section>
        <Title>Delivery Processes</Title>
        <Subtitle>Step 1: Order Placement</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tortor vel justo
          ultrices fermentum vel id neque.
        </Paragraph>

        <Subtitle>Step 2: Processing</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tortor vel justo
          ultrices fermentum vel id neque.
        </Paragraph>

      </Section>
    </Container>
  );
};

export default DeliveryPage;
