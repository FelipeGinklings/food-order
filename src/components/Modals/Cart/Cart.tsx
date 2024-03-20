import React, { useContext } from 'react';
import Button from '../../UI/Button';
import Item from './Item';
import { ProgressContext } from '../../../store/progress-context';
import { CartContext } from '../../../store/cart-context';
import { formatted } from '../../../utils/formatter';

const Cart: React.FC = () => {
  const { setProgress } = useContext(ProgressContext);
  const { items } = useContext(CartContext);

  const total = items
    .reduce((acc, item) => acc + +item.price * item.quantity!, 0)
    .toString();
  return (
    <>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Your Cart</h2>
      <ul className="list-none my-2 mx-0 p-0">
        {items.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </ul>
      <p className="flex justify-end my-8 mx-0 text-lg font-extrabold text-zinc-800">
        Total: {formatted(total)}
      </p>
      <p className="flex justify-end gap-4">
        <Button
          className="text-stone-800 active:text-stone-700 hover:text-stone-700"
          textOnly
          onClick={setProgress.bind(this, undefined)}
        >
          Close
        </Button>
        <Button
          onClick={setProgress.bind(this, 'checkout')}
          disabled={items.length === 0}
        >
          Go to Checkout
        </Button>
      </p>
    </>
  );
};

export default Cart;
