import React from 'react';

// type Props = {}

const Checkout: React.FC = () => {
  return (
    <>
      <p>Total Amount: </p>
      <form>
        <div>
          <p>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" />
          </p>
          <p>
            <label htmlFor="email">E-Email Address</label>
            <input type="email" id="email" />
          </p>
          <p>
            <label htmlFor="address">Street</label>
            <input type="text" id="address" />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" />
          </p>
          <p>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </p>
        </div>
      </form>
      <button type="button">Close</button>
      <button>Submit Order</button>
    </>
  );
};

export default Checkout;
