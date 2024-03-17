import Header from './components/Header/Header';
import List from './components/FoodList/List';
// import Modal from './components/Modals/Modal';
// import Cart from './components/Modals/Cart';
// import Checkout from './components/Modals/Checkout';
// import Success from './components/Modals/Success';

const App = () => {
  return (
    <main>
      <Header />
      <List />
      {/* Cart */}
      {/* <Modal>
        <Cart />
      </Modal> */}
      {/* Checkout */}
      {/* <Modal>
        <Checkout />
      </Modal> */}
      {/* Success! */}
      {/* <Modal>
        <Success />
      </Modal> */}
    </main>
  );
};

export default App;
