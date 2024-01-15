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
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const PriceTag = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #00a859;
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
  margin-right: 10px;
`;

const FilterBox = () => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const products = [
    { id: 1, title: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Product 7', price: 79.99, image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Product 8', price: 89.99, image: 'https://via.placeholder.com/150' },
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
