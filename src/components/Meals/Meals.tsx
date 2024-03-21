import React, { memo, useCallback, useContext } from 'react';
import Meal from './Meal';
import useHttp from '../../hooks/useHttp';
import { CartItem } from '../../utils/types';
import { CartContext } from '../../store/cart-context';
import Error from '../Error/Error';

const requestConfig = {};

const Meals: React.FC = memo(() => {
  const {
    data: mealData,
    isLoading,
    error,
  } = useHttp('GET', 'http://localhost:3000/meals', requestConfig, []);
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = useCallback(
    (item: CartItem) => {
      addToCart(item);
    },
    [addToCart]
  );

  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Show a error component */}
      {error && <Error title="Failed to fetch meals" message={error.message} />}
      {/* Show a loading text while loading the data */}
      {isLoading && <p className="mx-auto items-center">Loading...</p>}
      {!error &&
        !isLoading &&
        mealData.map((meal) => (
          <Meal
            key={meal.id}
            mealData={meal}
            handleAddToCart={addToCartHandler}
          />
        ))}
    </ul>
  );
});

export default Meals;
