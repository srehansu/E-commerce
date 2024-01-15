import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCartContext } from './CartContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 15rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  flex: 2;
  padding-left: 20px;
  padding-top: 20px;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
`;

const QuantityLabel = styled.label`
  font-size: 1.5rem;
`;

const QuantityInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
  margin-left: 1rem;
`;

const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const SimilarProductsContainerWrapper = styled.div`
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SimilarProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const SimilarProduct = styled.div`
  flex: 1 0 calc(24% - 20px);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const SimilarProductName = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SimilarProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
`;

const SimilarProductPrice = styled.p`
  font-size: 1.3rem;
  color: #333;
  font-weight: bold;
`;

const SimilarProductButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SimilarProductsHeading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
  margin-top: 2rem;
  text-align: center;
`;

const BuyButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WishlistButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BuyBigButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const products = [
  {
    id: 11,
    title: 'Laptop',
    image: 'https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=',
    price: 29.99,
    description: 'Description of Product 1.',
  },
  {
    id: 12,
    title: 'Football',
    image: 'https://media.istockphoto.com/id/93889291/photo/football-used-isolated-old-style-soccer-ball-on-white-background.jpg?s=612x612&w=0&k=20&c=rRDUovgbcAQhXcYxZ79_LEAl73qD-f3_35-UyCE9DhM=',
    price: 39.99,
    description: 'Description of Product 2.',
  },

  {
    id: 13,
    title: 'I phone',
    image: 'https://media.istockphoto.com/id/1360563991/photo/iphone-13-pro-in-white-background-new-smartphone-from-apple-company-close-up.jpg?s=612x612&w=0&k=20&c=TmlB8YCgRjHOAHUe3cOJ0mcxGoqfliehLIUQ4vSC0Nk=',
    price: 39.99,
    description: 'Description of Product 2.',
  },

  {
    id: 14,
    title: 'Android',
    image: 'https://media.istockphoto.com/id/1297241364/photo/black-smart-phone-with-white-screen-isolated-white-background.jpg?s=612x612&w=0&k=20&c=MJDli6NP16WaDdT-VWvZuS32UkB2vlCZr1nsBfEjjEI=',
    price: 39.99,
    description: 'Description of Product 2.',
  },

  {
    id: 15,
    title: 'Smart TV',
    image: 'https://media.istockphoto.com/id/467946398/photo/contemporary-curved-led-smart-tv-design.jpg?s=612x612&w=0&k=20&c=s-eIL1kSR1YalWVGFk9sIvt0XbJMQGIlLlzUUbw6jLA=',
    price: 39.99,
    description: 'Description of Product 2.',
  },

  {
    id: 16,
    title: 'T-shirt',
    image: 'https://media.istockphoto.com/id/482948743/photo/blank-white-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=cJG_B0mOIG42FKtC_rqIeZCClYOj7UCFNNs9WTkYEEE=',
    price: 39.99,
    description: 'Description of Product 2.',
  },

  
  // Add more products as needed
];
const ProductsPerPage = 3;

const ProductDescription = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { addToCart } = useCartContext();

  const handleBuyButtonClick = (similarProduct) => {
    navigate(`/ProductDescription/${similarProduct.id}`, {
      state: {
        productName: similarProduct.title,
        productImage: similarProduct.image,
        productPrice: similarProduct.price,
        productDescription: similarProduct.description,
      },
    });
  };

  const handleAddToCartButtonClick = () => {
    const newItem = {
      id: state.id,
      title: state.productName,
      price: state.productPrice,
      quantity: quantity,
      image: state.productImage, // Include the image in the cart item for display in the cart
      description: state.productDescription, // Include the description in the cart item
    };

    addToCart(newItem); // Assuming addToCart is a function from useCartContext
    console.log('Product added to cart:', newItem);
    console.log('Navigating to /AddToCart');
    navigate('/AddToCart');
  };

  const handleBuyBigButtonClick = () => {
    navigate('/CheckOut');
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIdx = currentPage * ProductsPerPage;
  const endIdx = startIdx + ProductsPerPage;

  const similarProductsToShow = products.slice(startIdx, endIdx);

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <Image src={state.productImage} alt={state.productName} />
        </ImageContainer>
        <InfoContainer>
          <ProductName>{state.productName}</ProductName>
          <Price>${state.productPrice.toFixed(2)}</Price>
          <Description>{state.productDescription}</Description>
          <QuantityLabel>
            Quantity:
            <QuantityInput
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            />
          </QuantityLabel>
          <TotalPrice>Total: ${(state.productPrice * quantity).toFixed(2)}</TotalPrice>
          <BuyBigButton onClick={handleBuyBigButtonClick}>Buy Now</BuyBigButton>
        </InfoContainer>
      </ContentContainer>
      <SimilarProductsContainerWrapper>
        <SimilarProductsHeading>Similar Products</SimilarProductsHeading>
        <SimilarProductsContainer>
          {similarProductsToShow.map((similarProduct) => (
            <SimilarProduct key={similarProduct.id}>
              <img
                src={similarProduct.image}
                alt={similarProduct.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <SimilarProductName>{similarProduct.title}</SimilarProductName>
              <SimilarProductDescription>{similarProduct.description}</SimilarProductDescription>
              <SimilarProductPrice>${similarProduct.price.toFixed(2)}</SimilarProductPrice>
              <SimilarProductButtons>
                <BuyButton onClick={() => handleBuyButtonClick(similarProduct)}>
                  View Details
                </BuyButton>
                <WishlistButton onClick={handleAddToCartButtonClick}>Add to Cart</WishlistButton>
              </SimilarProductButtons>
            </SimilarProduct>
          ))}
        </SimilarProductsContainer>
        <PaginationContainer>
          <PaginationButton onClick={handlePrevClick} disabled={currentPage === 0}>
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={handleNextClick}
            disabled={endIdx >= products.length}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      </SimilarProductsContainerWrapper>
    </Container>
  );
};

export default ProductDescription;