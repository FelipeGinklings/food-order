import { useEffect, useState } from 'react';
import { MealData } from 'src/App';

const useFetch = (fetchFn: () => Promise<MealData[]>, initialValue: []) => {
  const [mealData, setMealData] = useState<MealData[]>(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFn();
        setMealData(data);
      } catch (error: unknown) {
        setError({
          message: (error as Error).message || 'Something went wrong!',
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [fetchFn]);

  return { mealData, isLoading, error };
};

export default useFetch;
