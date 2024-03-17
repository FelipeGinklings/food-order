import React from 'react';
import FoodItem from './Item';

// type Props = {}

const List: React.FC = () => {
  return (
    <section>
      <ul>
        <FoodItem />
      </ul>
    </section>
  );
};

export default List;
