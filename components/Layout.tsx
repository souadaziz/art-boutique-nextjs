'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import { CartProvider } from '@/lib/cart-context';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
