import React from 'react';

// type Props = {}

const Item: React.FC = () => {
  return (
    <li className="flex justify-between items-center my-2 mx-0">
      <p className="m-0">NAME - AMOUNT x VALUE</p>
      <p className="m-0 flex gap-4 items-center">
        <button className="cursor-pointer text-base w-6 h-6 rounded-[50%] border-0 bg-stone-700 text-yellow-500 flex justify-center items-center active:bg-stone-900 active:text-yellow-600 hover:bg-stone-900 hover:text-yellow-600">
          +
        </button>
        <span>AMOUNT</span>
        <button className="cursor-pointer text-base w-6 h-6 rounded-[50%] border-0 bg-stone-700 text-yellow-500 flex justify-center items-center active:bg-stone-900 active:text-yellow-600 hover:bg-stone-900 hover:text-yellow-600">
          -
        </button>
      </p>
    </li>
  );
};

export default Item;
