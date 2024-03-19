import React from 'react';
import Button from '../UI/Button';
import { MealData } from 'src/App';

interface Props extends MealData {}

const Meal: React.FC<Props> = ({ id, price, name, description, image }) => {
  return (
    <li className="bg-very-dark-brow rounded-2xl overflow-hidden text-center shadow-md">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={`http://localhost:3000/${image}`}
          alt="Image of a meal"
        />
        <div>
          <h3 className="text-2xl font-bold my-4 mx-0">{name}</h3>
          <p className="inline-block bg-stone-700 text-yellow-500 text-sm font-bold py-2 px-8 m-0 rounded-[4px]">
            {price}
          </p>
          <p className="m-4">{description}</p>
        </div>
        <p className="mb-6">
          <Button type="button" onClick={() => id}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
