import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
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
  top: 6%;
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
  margin-top: 1rem;

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
  transition: color 0.1s, background-color 0.1s; /* Add transition effect */

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 767px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const SolidButton = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 3rem;
  border: 2px solid white; /* Add border color */
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  transition: color 0.1s, background-color 0.1s; /* Add transition effect */

  &:hover {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  @media (max-width: 767px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const FeaturesContainer = styled.div`
margin-top: 1rem;
`;

const FeatureCard = styled(animated.div)`
background-color: white;
color: black;
padding: 2rem;
border-radius: 1rem;
margin-bottom: 2rem;
text-align: center;
cursor: pointer;
transition: transform 0.2s ease-in-out;

&:hover {
  transform: scale(1.1);
}

@media (max-width: 767px) {
  padding: 1.5rem;
}
`;

const FeatureTitle = styled.h3`
font-size: 2rem;
margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
font-size: 1.2rem;
`;
const Home = () => {
  // Replace 'YOUR_PAYMENT_LINK' with the actual payment link
  const paymentLink = '/Payment';
  const featuresAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

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
        <H2>Our Features</H2>

        {/* Features Section with Animations */}
        <FeaturesContainer>
          <FeatureCard style={featuresAnimation}>
            <FeatureTitle>Fast Delivery</FeatureTitle>
            <FeatureDescription>Get your products delivered at lightning speed!</FeatureDescription>
          </FeatureCard>

          <FeatureCard style={featuresAnimation}>
            <FeatureTitle>Quality Products</FeatureTitle>
            <FeatureDescription>Explore a wide range of high-quality products.</FeatureDescription>
          </FeatureCard>

          <FeatureCard style={featuresAnimation}>
            <FeatureTitle>24/7 Support</FeatureTitle>
            <FeatureDescription>Our support team is always ready to assist you.</FeatureDescription>
          </FeatureCard>
          <FeatureCard style={featuresAnimation}>
        <H2>Our Products</H2>
        <H6>
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
          <br />
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
        </H6>
        </FeatureCard>
        <FeatureCard style={featuresAnimation}>
        <H2>Our Services</H2>
        <H6>
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
          <br />
          Loem ipsum dolor sit omet consectetur aossumendo eo quo cupíditote focere
        </H6>
        </FeatureCard>
        </FeaturesContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
