import React from 'react';
import Button from '../../UI/Button';
import Item from './Item';

const Cart: React.FC = () => {
  return (
    <>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Your Cart</h2>
      <ul className="list-none my-2 mx-0 p-0">
        <Item />
        <Item />
      </ul>
      <p className="flex justify-end my-8 mx-0 text-lg font-extrabold text-zinc-800">
        Total
      </p>
      <p className="flex justify-end gap-4">
        <Button
          className="text-stone-800 active:text-stone-700 hover:text-stone-700"
          textOnly
          type="button"
        >
          Close
        </Button>
        <Button type="button">Go to Checkout</Button>
      </p>
    </>
  );
};

export default Cart;
