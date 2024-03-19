import React from 'react';
import Meal from './Meal';
import useFetch from '../../hooks/useFetch';
import { fetchMealData } from '../../utils/http';

const Meals: React.FC = () => {
  const { mealData, isLoading, error } = useFetch(fetchMealData, []);

  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {mealData.map((meal) => (
        <Meal key={meal.id} {...meal}></Meal>
      ))}
    </ul>
  );
};

export default Meals;
