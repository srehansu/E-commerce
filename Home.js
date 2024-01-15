import React from 'react';
import styled from 'styled-components';

// Styled components for the main content
const HomeContainer = styled.div`
  text-align: center;
  position: relative;
  font-size: 2rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 50rem;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 10%;
  left: 14%;
  text-align: left;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 7rem;
  color: white;

  @media (max-width: 767px) {
    font-size: 5rem;
  }
`;

const H2 = styled.h2`
  font-size: 4rem;
  margin-top: 4rem; /* Adjust as needed */

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

const H5 = styled.h5`
  font-weight: normal;
  color: white;
  font-size: 2rem;
  margin-top: -2.5rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    margin-top: -1.5rem;
  }
`;

const H6 = styled.h6`
  font-weight: normal;
  font-size: 1rem;
  margin-top: -2rem;
  margin-bottom: 6rem;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const TransparentButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 1rem 4.5rem;
  border: 2px solid white;
  border-radius: 0.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  font-size: 1.2rem;

  @media (max-width: 767px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const SolidButton = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.3rem;

  @media (max-width: 767px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const Home = () => {
  // Replace 'YOUR_PAYMENT_LINK' with the actual payment link
  const paymentLink = '/Payment';

  return (
    <>
      <HomeContainer>
        <Img src="https://media.istockphoto.com/id/1370737372/photo/young-woman-online-shopping-using-the-laptop-at-home.jpg?s=612x612&w=0&k=20&c=Z0cW-v8O60-TTWZGKL6Y26xmZSq4U_PCYgwHkcgzm5E=" alt="Shop Interior" />
        <OverlayText>
          <H1>Shop With Us</H1>
          <H5>
            Loem ipsum dolor sit omet consectetur <br />aossumendo eo quo cupíditote focere
          </H5>
          <ButtonContainer>
            {/* Wrap the button with an anchor tag */}
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">
              <TransparentButton>Shop Now</TransparentButton>
            </a>
            <SolidButton>Club Membership</SolidButton>
          </ButtonContainer>
        </OverlayText>
        <H2>Our Products</H2>
        <H6>
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
          <br />
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
        </H6>
        <H2>Our Services</H2>
        <H6>
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
          <br />
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
        </H6>
      </HomeContainer>
    </>
  );
};

export default Home;
