import React from 'react';
import Button from '../UI/Button';

// type Props = {}

const Meal: React.FC = () => {
  return (
    <li className="bg-very-dark-brow rounded-2xl overflow-hidden text-center shadow-md">
      <article className="h-full flex flex-col justify-between">
        <img className="w-full h-80 object-cover" src="" alt="" />
        <div>
          <h3 className="text-2xl font-bold my-4 mx-0">FOOD NAME</h3>
          <p className="inline-block bg-stone-700 text-yellow-500 text-sm font-bold py-2 px-8 m-0 rounded-[4px]">
            PRICE
          </p>
          <p className="m-4">FOOD DESCRIPTION</p>
        </div>
        <p className="mb-6">
          <Button type="button">Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
