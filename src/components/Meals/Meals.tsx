import React, { useEffect, useState } from 'react';
import Meal from './Meal';
import { MealData } from 'src/App';

// type Props = {}

const Meals: React.FC = () => {
  const [mealData, setMealData] = useState<MealData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/meals');
        const data: MealData[] = await response.json();
        setMealData(data);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
      } catch (error: unknown) {
        setError({
          message: (error as Error).message || 'Something went wrong!',
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
