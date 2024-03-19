import React from 'react';
import Meal from './Meal';

// type Props = {}

const Meals: React.FC = () => {
  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Meal />
    </ul>
  );
};

export default Meals;
