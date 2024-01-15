import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px; /* Add padding for mobile */
`;

const ErrorTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  text-align: center; /* Center align the text */
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center; /* Center align the text */
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;
  transition: color 0.3s;
  text-align: center; /* Center align the text */

  &:hover {
    color: #0056b3;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>404 Error <br />Oops! Something went wrong.</ErrorTitle>
      <ErrorMessage>
        It seems there was an error. Please try again later.
      </ErrorMessage>
      <HomeLink to="/">Go back to home</HomeLink>
    </ErrorContainer>
  );
};

export default ErrorPage;
