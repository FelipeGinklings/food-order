import { createContext, useCallback, useReducer } from 'react';
import React from 'react';
import { CartItem } from 'src/utils/types';

// Context
type Cart = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  changeQuantity: (id: string, type: 'MORE' | 'LESS') => void;
  reset: () => void;
};

export const CartContext = createContext<Cart>({
  items: [],
  addToCart: () => {},
  changeQuantity: () => {},
  reset: () => {},
});

// Reducer
type State = {
  items: CartItem[];
};

// Actions
type AddToCart = {
  type: 'ADD';
  payload: {
    item: CartItem;
  };
};

type Quantity = {
  type: 'QUANTITY';
  payload: {
    id: string;
    type: 'MORE' | 'LESS';
  };
};

type Reset = {
  type: 'RESET';
  payload?: undefined;
};

type Action = AddToCart | Quantity | Reset;

const cartReducer = (state: State, action: Action) => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case 'ADD': {
      const updatedItemIndex = items.findIndex(
        (item) => item.id === payload.item.id
      );
      const updatedItems = structuredClone(items);

      if (updatedItemIndex === -1) {
        updatedItems.push({
          ...payload.item,
          quantity: 1,
        });
      } else {
        const existingItem = updatedItems[updatedItemIndex];
        existingItem.quantity!++;
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'QUANTITY': {
      const updatedItems = structuredClone(items);
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === payload.id
      );
      if (payload.type === 'MORE') {
        updatedItems[updatedItemIndex].quantity!++;
      } else {
        if (updatedItems[updatedItemIndex].quantity === 1) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex].quantity!--;
        }
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'RESET': {
      return {
        items: [],
      };
    }
  }
};

// Provider
type Props = {
  children: React.ReactNode;
};

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  const addToCartHandler = useCallback(
    (item: CartItem) => {
      dispatch({
        type: 'ADD',
        payload: { item },
      });
    },
    [dispatch]
  );

  const changeQuantityHandler = (id: string, type: 'MORE' | 'LESS') => {
    dispatch({
      type: 'QUANTITY',
      payload: {
        id,
        type,
      },
    });
  };

  const resetCartHandler = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const ctxCart: Cart = {
    items: cart.items,
    addToCart: addToCartHandler,
    changeQuantity: changeQuantityHandler,
    reset: resetCartHandler,
  };

  return (
    <CartContext.Provider value={ctxCart}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
