import React, { useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { ProgressContext } from '../../store/progress-context';

// type Props = {}

const Checkout: React.FC = () => {
  const { setProgress } = useContext(ProgressContext);
  return (
    <>
      <form>
        <h2 className="py-4 px-0 text-2xl font-extrabold">Checkout</h2>
        <p className="text-base">Total Amount: </p>
        <Input />
        <Input />
        <Input />
        <div className="flex justify-start gap-4">
          <Input />
          <Input />
        </div>
      </form>
      <p className="flex justify-end gap-4">
        <Button
          className="text-stone-800 active:text-stone-700 hover:text-stone-700"
          textOnly
          onClick={setProgress.bind(this, 'success')}
        >
          Close
        </Button>
        <Button>Submit Order</Button>
      </p>
    </>
  );
};

export default Checkout;
