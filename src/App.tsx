import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
// import Cart from './components/Modals/Cart/Cart';
// import Modal from './components/UI/Modal';
import CartContextProvider from './store/cart-context';
import ProgressProvider from './store/progress-context';

const App = () => {
  return (
    // Providers
    <ProgressProvider>
      <CartContextProvider>
        {/* Main Page */}
        <Header />
        <Meals />

        {/* Modals */}
        {/* <Modal >
          <Cart />
        </Modal> */}
      </CartContextProvider>
    </ProgressProvider>
  );
};

export default App;
