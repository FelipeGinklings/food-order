import React, { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import { CartItem } from '../../../utils/types';

type Props = {
  data: CartItem;
};

const Item: React.FC<Props> = ({ data }) => {
  const { changeQuantity } = useContext(CartContext);

  return (
    <li className="flex justify-between items-center my-2 mx-0">
      <p className="m-0">
        {data.name} - {data.quantity} x {data.price}
      </p>
      <p className="m-0 flex gap-4 items-center">
        <button
          className="cursor-pointer text-base w-6 h-6 rounded-[50%] border-0 bg-stone-700 text-yellow-500 flex justify-center items-center active:bg-stone-900 active:text-yellow-600 hover:bg-stone-900 hover:text-yellow-600"
          onClick={changeQuantity.bind('', data.id, 'MORE')}
        >
          +
        </button>
        <span>{data.quantity}</span>
        <button
          className="cursor-pointer text-base w-6 h-6 rounded-[50%] border-0 bg-stone-700 text-yellow-500 flex justify-center items-center active:bg-stone-900 active:text-yellow-600 hover:bg-stone-900 hover:text-yellow-600"
          onClick={changeQuantity.bind('', data.id, 'LESS')}
        >
          -
        </button>
      </p>
    </li>
  );
};

export default Item;
