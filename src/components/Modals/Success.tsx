import React, { useContext } from 'react';
import Button from '../UI/Button';
import { ProgressContext } from '../../store/progress-context';
import { CartContext } from '../../store/cart-context';

const Success: React.FC = () => {
  const { reset } = useContext(CartContext);
  const { setProgress } = useContext(ProgressContext);
  return (
    <>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <p className="flex justify-end gap-4 mt-4">
        <Button
          type="button"
          onClick={() => {
            setProgress(undefined);
            reset();
          }}
        >
          Okay
        </Button>
      </p>
    </>
  );
};

export default Success;
