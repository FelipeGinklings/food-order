import { MealData, OrderData } from './types';

export const fetchMealData = async () => {
  const response = await fetch('http://localhost:3000/meals');
  const data: MealData[] = await response.json();

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return data;
};

export const postNewOrder = async (order: OrderData) => {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order }),
  });

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
};
