import { createContext, useReducer } from 'react';
import React from 'react';
import { CartItem } from 'src/utils/types';

// Context
type Cart = {
  amount: number;
  items: CartItem[];
};

export const CartContext = createContext<Cart>({
  amount: 0,
  items: [],
});

// Reducer
type State = {
  amount: number;
  items: CartItem[];
};

type AddToCartAction = {
  type: 'ADD';
  payload: {
    item: CartItem;
  };
};

type QuantityAction = {
  type: 'QUANTITY';
  payload: {
    id: string;
    type: 'MORE' | 'LESS';
  };
};

type Action = AddToCartAction | QuantityAction;

const cartReducer = (state: State, action: Action) => {
  const { amount, items } = state;
  const { type, payload } = action;

  switch (type) {
    case 'ADD': {
      const updatedItems = [...items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === payload.item.id
      );
      updatedItems[updatedItemIndex].quantity++;
      return {
        ...state,
        amount: amount + 1,
        items: updatedItems,
      };
    }
    case 'QUANTITY': {
      const updatedItems = [...items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === payload.id
      );
      if (payload.type === 'MORE') {
        updatedItems[updatedItemIndex].quantity++;
      } else {
        updatedItems[updatedItemIndex].quantity--;
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
  }
};

// Provider
type Props = {
  children: React.ReactNode;
};

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    amount: 0,
    items: [],
  });

  const addToCartHandler = (item: CartItem) => {
    dispatch({
      type: 'ADD',
      payload: { item },
    });
  };

  const quantityHandler = (id: string, type: 'MORE' | 'LESS') => {
    dispatch({
      type: 'QUANTITY',
      payload: {
        id: id,
        type: type,
      },
    });
  };

  const ctxCart = {
    amount: cart.amount,
    items: cart.items,
    addToCart: addToCartHandler,
    quantity: quantityHandler,
  };

  return (
    <CartContext.Provider value={ctxCart}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
