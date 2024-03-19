import React from 'react';
import Button from '../UI/Button';
import { CartItem, MealData } from '../../utils/types';

interface Props {
  mealData: MealData;
  handleAddToCart: (item: CartItem) => void;
}

const Meal: React.FC<Props> = ({ mealData, handleAddToCart }) => {
  return (
    <li className="bg-very-dark-brow rounded-2xl overflow-hidden text-center shadow-md">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={`http://localhost:3000/${mealData.image}`}
          alt="Image of a meal"
        />
        <div>
          <h3 className="text-2xl font-bold my-4 mx-0">{mealData.name}</h3>
          <p className="inline-block bg-stone-700 text-yellow-500 text-sm font-bold py-2 px-8 m-0 rounded-[4px]">
            {mealData.price}
          </p>
          <p className="m-4">{mealData.description}</p>
        </div>
        <p className="mb-6">
          <Button
            type="button"
            onClick={() =>
              handleAddToCart({
                id: mealData.id,
                name: mealData.name,
                price: mealData.price,
              })
            }
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
