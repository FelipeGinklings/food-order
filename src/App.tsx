import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/cart-context';
import Modal from './components/UI/Modal';
import { useContext } from 'react';
import { ProgressContext } from './store/progress-context';
import Cart from './components/Modals/Cart/Cart';
import Checkout from './components/Modals/Checkout';
import Success from './components/Modals/Success';

const App = () => {
  const { progress, setProgress } = useContext(ProgressContext);
  return (
    // Providers
    <CartContextProvider>
      {/* Main Page */}
      <Header />
      <Meals />
      {/* Modals */}
      <Modal open={!!progress} onClose={setProgress.bind(this, undefined)}>
        {progress === 'cart' && <Cart />}
        {progress === 'checkout' && <Checkout />}
        {progress === 'success' && <Success />}
      </Modal>
    </CartContextProvider>
  );
};

export default App;
