import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
// import Cart from './components/Modals/Cart/Cart';
// import Checkout from './components/Modals/Checkout';
// import Success from './components/Modals/Success';

export interface MealData {
  id: string;
  price: string;
  name: string;
  description: string;
  image: string;
}

const App = () => {
  return (
    <>
      <Header />
      <Meals />
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Success /> */}
    </>
  );
};

export default App;
