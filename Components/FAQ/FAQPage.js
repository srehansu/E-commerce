import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: left;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const Question = styled.div`
  margin-bottom: 30px;
`;

const QuestionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #3498db;
  transition: color 0.3s;

  &:hover {
    color: #217dbb;
  }
`;

const Answer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

const FAQPage = () => {
  return (
    <FAQContainer>
      <SectionTitle>Frequently Asked Questions</SectionTitle>

      <Question>
        <QuestionTitle>How can I place an order?</QuestionTitle>
        <Answer>
          To place an order, simply browse our products, add items to your cart, and proceed to
          checkout. Follow the steps to provide shipping information, select a payment method, and
          complete your purchase.
        </Answer>
      </Question>

      <Question>
        <QuestionTitle>What payment methods do you accept?</QuestionTitle>
        <Answer>
          We accept various payment methods, including credit cards, debit cards, and PayPal. You can
          select your preferred payment option during the checkout process.
        </Answer>
      </Question>

      <Question>
        <QuestionTitle>How can I track my order?</QuestionTitle>
        <Answer>
          Once your order is shipped, you will receive a tracking number and a link to track your
          package. You can also log in to your account to view the order status and tracking details.
        </Answer>
      </Question>

      <Question>
        <QuestionTitle>What is your return policy?</QuestionTitle>
        <Answer>
          Our return policy allows you to return items within 30 days of delivery for a full refund.
          Please check our Returns and Exchanges page for detailed instructions and eligibility
          criteria.
        </Answer>
      </Question>

      <Question>
        <QuestionTitle>Do you ship internationally?</QuestionTitle>
        <Answer>
          Yes, we offer international shipping. Shipping costs and delivery times vary based on the
          destination. You can view the shipping options during the checkout process.
        </Answer>
      </Question>

      <Question>
        <QuestionTitle>How can I contact customer support?</QuestionTitle>
        <Answer>
          Our customer support team is available via email at support@example.com or through our
          Contact Us page. We strive to respond to inquiries within 24 hours.
        </Answer>
      </Question>

      {/* Add more questions and answers as needed */}
    </FAQContainer>
  );
};

export default FAQPage;
