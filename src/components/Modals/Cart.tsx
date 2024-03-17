import React from 'react';

// type Props = {}

const Cart: React.FC = () => {
  return (
    <>
      <h2>Your Cart</h2>
      <ol>
        <li>
          <p>FOOD NAME - AMOUNT X PRICE</p>
          <p>ICON MINUS</p>
          <p>AMOUNT</p>
          <p>ICON PLUS</p>
        </li>
      </ol>
      <p>Total</p>
      <button type="button">Close</button>
      <button type="button">Go to Checkout</button>
    </>
  );
};

export default Cart;
