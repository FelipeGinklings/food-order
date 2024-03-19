import React, { useCallback, useContext } from 'react';
import Meal from './Meal';
import useFetch from '../../hooks/useFetch';
import { fetchMealData } from '../../utils/http';
import { CartItem } from '../../utils/types';
import { CartContext } from '../../store/cart-context';

const Meals: React.FC = () => {
  const { mealData, isLoading, error } = useFetch(fetchMealData, []);

  const { addToCart, items } = useContext(CartContext);

  if (items.length > 0) {
    console.log('Quantity: ', items[0].quantity);
  }

  const addToCartHandler = useCallback(
    (item: CartItem) => {
      addToCart(item);
    },
    [addToCart]
  );

  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {mealData.map((meal) => (
        <Meal
          key={meal.id}
          mealData={meal}
          handleAddToCart={addToCartHandler}
        />
      ))}
    </ul>
  );
};

export default Meals;
