'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartableItem, CartItem, CartContextType } from '@/types';

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; item: CartableItem }
  | { type: 'REMOVE_FROM_CART'; itemId: string }
  | { type: 'UPDATE_QUANTITY'; itemId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; items: CartItem[] };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(cartItem => cartItem.item.id === action.item.id);
      if (existingItem) {
        return state.map(cartItem =>
          cartItem.item.id === action.item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...state, { item: action.item, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(cartItem => cartItem.item.id !== action.itemId);

    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(cartItem => cartItem.item.id !== action.itemId);
      }
      return state.map(cartItem =>
        cartItem.item.id === action.itemId
          ? { ...cartItem, quantity: action.quantity }
          : cartItem
      );

    case 'CLEAR_CART':
      return [];

    case 'LOAD_CART':
      return action.items;

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('art-boutique-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', items: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('art-boutique-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartableItem) => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', itemId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = items.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.quantity), 0);
  const itemCount = items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
