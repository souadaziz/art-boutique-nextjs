'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Artwork, CartItem, CartContextType } from '@/types';

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; artwork: Artwork }
  | { type: 'REMOVE_FROM_CART'; artworkId: string }
  | { type: 'UPDATE_QUANTITY'; artworkId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; items: CartItem[] };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.artwork.id === action.artwork.id);
      if (existingItem) {
        return state.map(item =>
          item.artwork.id === action.artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { artwork: action.artwork, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.artwork.id !== action.artworkId);

    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(item => item.artwork.id !== action.artworkId);
      }
      return state.map(item =>
        item.artwork.id === action.artworkId
          ? { ...item, quantity: action.quantity }
          : item
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

  const addToCart = (artwork: Artwork) => {
    dispatch({ type: 'ADD_TO_CART', artwork });
  };

  const removeFromCart = (artworkId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', artworkId });
  };

  const updateQuantity = (artworkId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', artworkId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = items.reduce((sum, item) => sum + (item.artwork.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

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
