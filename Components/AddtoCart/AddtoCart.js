import React from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const ProductRow = styled.tr`
  border: 1px solid #ddd;
`;

const ProductData = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const ProductImage = styled.img`
  max-width: 100px;
  margin-right: 10px;
`;

const QuantitySelect = styled.select`
  padding: 8px;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const TotalSection = styled.div`
  margin-top: 20px;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
`;

const AddToCartPage = () => {
  const { cart, updateQuantity, removeProduct } = useCartContext();

  const calculateSubtotal = () => {
    if (cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, product) => {
      const productTotal = product.price * product.quantity;
      return total + (isNaN(productTotal) ? 0 : productTotal);
    }, 0).toFixed(2);
  };

  const calculateSalesTax = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * 0.02).toFixed(2);
  };

  const calculateGrandTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const salesTax = parseFloat(calculateSalesTax());
    return (subtotal + salesTax).toFixed(2);
  };

  const handleRemove = (productId) => {
    removeProduct(productId);
  };

  return (
    <Container>
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your Shopping Cart is Empty</p>
      ) : (
        <ProductTable>
          <thead>
            <tr>
              <TableHeader>Item</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <ProductRow key={product.id}>
                <ProductData>
                  <div>
                    <ProductImage src={product.image} alt="Product Image" />
                    <div>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </ProductData>
                <ProductData>${product.price}</ProductData>
                <ProductData>
                  <QuantitySelect
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </QuantitySelect>
                </ProductData>
                <ProductData>${(product.price * product.quantity).toFixed(2)}</ProductData>
                <ProductData>
                  <RemoveButton onClick={() => handleRemove(product.id)}>Remove</RemoveButton>
                </ProductData>
              </ProductRow>
            ))}
          </tbody>
        </ProductTable>
      )}

      {/* Totals Section */}
      {cart.length > 0 && (
        <TotalSection>
          <h2>Totals</h2>
          <div>
            <strong>Subtotal:</strong> ${calculateSubtotal()}
          </div>
          <div>
            <strong>Sales Tax (2%):</strong> ${calculateSalesTax()}
          </div>
          <div>
            <strong>Grand Total:</strong> ${calculateGrandTotal()}
          </div>
          <Link to="/CheckOut">
            <StyledButton>Checkout Now</StyledButton>
          </Link>
        </TotalSection>
      )}
    </Container>
  );
};

export default AddToCartPage;
