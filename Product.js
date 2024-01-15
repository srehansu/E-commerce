import React from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext'; // Adjust the path accordingly
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FilterBoxContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  flex: 1;
  margin-top: 2rem;
  position: relative;
  left: -15rem;

  @media (max-width: 767px) {
    flex: initial;
    margin-top: 0;
    left: 0;
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  margin-top: 6rem;

  @media (max-width: 767px) {
    margin-top: 2rem;
  }
`;

const SearchBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SearchLogo = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
`;

const CategoryDropdown = styled(Select)`
  width: 100%;
`;

const PriceRangeDropdown = styled(Select)`
  width: 100%;
`;

const QuantitySelector = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
`;

const ApplyButton = styled.button`
  background-color: #00a859;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00713e;
  }
`;

const ProductListContainer = styled.div`
  flex: 3;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductContainer = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height:21rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
  max-height:9rem;
`;

const ProductTitle = styled.h1`
  font-size: 18px;
  margin-bottom: -2rem;
  color: #333;
`;

const PriceTag = styled.div`
  margin-top: 3rem;
  font-size: 16px;
  color: #00a859;
  margin-bottom:1rem;
`;

const AddToCartButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const BuyButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;

const FilterBox = () => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const products = [
    { id: 1, title: 'Football', price: 19.99, image: 'https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=f7EWJti8x_JFmDxA8CMJvi1ulMlPjTdDP69HBWy9Hb4=' },
    { id: 2, title: 'T-Shirt', price: 29.99, image: 'https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=' },
    { id: 3, title: 'I-Phone', price: 39.99, image: 'https://media.istockphoto.com/id/1360563991/photo/iphone-13-pro-in-white-background-new-smartphone-from-apple-company-close-up.jpg?s=612x612&w=0&k=20&c=TmlB8YCgRjHOAHUe3cOJ0mcxGoqfliehLIUQ4vSC0Nk=' },
    { id: 4, title: 'Perfume', price: 49.99, image: 'https://media.istockphoto.com/id/1194825741/photo/close-up-of-glass-bottle-of-perfume-and-opened-gift-box-as-a-background-on-the-white-surface.jpg?s=612x612&w=0&k=20&c=wL-Jxi5xwfr2jp4QzNAQJQtFYr-XYC5WmZyCChL_EYA=' },
    { id: 5, title: 'Video Game', price: 59.99, image: 'https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=' },
    { id: 6, title: 'Laptop Bag', price: 69.99, image: 'https://media.istockphoto.com/id/182157353/photo/laptop-in-a-bag.jpg?s=612x612&w=0&k=20&c=bkwyNNYFWgLkB9C9bNPnjHzyBe-Bkn-k6JDL6steEp4=' },
    { id: 7, title: 'Dumbell Set', price: 79.99, image: 'https://media.istockphoto.com/id/1406546919/vector/realistic-fitness-composition-3d-sport-objects-flying-elements-workout-gym-tools-shaker.jpg?s=612x612&w=0&k=20&c=ryFVmAEjqQQaDeBp_ukxGrFvfdEIvt_EoF04iLA8pyo=' },
    { id: 8, title: 'Sports Shoes', price: 89.99, image: 'https://media.istockphoto.com/id/1308274455/photo/blue-sneakers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mNrdHQkWjTk8xxEn9Dst9C-ouTemFo-8dI5vpa1yfjk=' },
  ];

  const handleBuyButtonClick = (product) => {
    addToCart(product);
    navigate(`/ProductDescription/${product.id}`, {
      state: {
        productName: product.title,
        productPrice: product.price,
        productImage: product.image,
        productDescription: `Description for ${product.title}`, // You can replace this with the actual description
      },
    });
  };
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate(`/AddToCart`, {
      state: {
        productName: product.title,
        productPrice: product.price,
        productImage: product.image,
        productDescription: `Description for ${product.title}`, // You can replace this with the actual description
      },
    });
  };
  return (
    <PageContainer>
      <FilterBoxContainer>
        <h1>FilterBox</h1>
        <FilterRow>
          <SearchBoxContainer>
            <SearchBox type="text" placeholder="Search products..." style={{ fontSize: '0.95rem' }} />
            <SearchLogo>🔍</SearchLogo>
          </SearchBoxContainer>
          <CategoryDropdown
            options={[
              { value: 'category1', label: 'Sports' },
              { value: 'category2', label: 'Kids' },
              { value: 'category3', label: 'Dress' },
            ]}
            placeholder="Select Category"
          />
          <PriceRangeDropdown
            options={[
              { value: '0-10', label: '$0 - $10' },
              { value: '10-20', label: '$10 - $20' },
              { value: '20-30', label: '$20 - $30' },
              // Add more ranges as needed
            ]}
            placeholder="Select Price Range"
          />
          <QuantitySelector
            type="number"
            placeholder="Quantity"
          />
          <ApplyButton>Apply</ApplyButton>
        </FilterRow>
      </FilterBoxContainer>
      <ProductListContainer>
        <ProductGrid>
          {products.map(product => (
            <ProductContainer key={product.id}>
              <ProductImage src={product.image} alt={`Product ${product.id}`} />
              <ProductTitle>{product.title}</ProductTitle>
              <PriceTag>${product.price}</PriceTag>
              <BuyButton onClick={() => handleBuyButtonClick(product)}>Buy</BuyButton>
              <AddToCartButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </AddToCartButton>
            </ProductContainer>
          ))}
        </ProductGrid>
      </ProductListContainer>
    </PageContainer>
  );
};

export default FilterBox;
