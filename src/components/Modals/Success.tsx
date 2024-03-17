import React from 'react';

// type Props = {}

const Success: React.FC = () => {
  return (
    <>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <button type="button">Okay</button>
    </>
  );
};

export default Success;
