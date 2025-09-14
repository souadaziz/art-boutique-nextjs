'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWritten, setIsWritten] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    // Déclencher l'animation après un court délai
    const timer = setTimeout(() => {
      setIsWritten(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Galerie', href: '/boutique' },
    { name: 'Art sur mesure', href: '/art-sur-mesure' },
    { name: 'Workshop', href: '/workshop' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/LOG.png"
              alt="SouadAzizArt Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <div className="flex flex-col leading-none items-center">
              <div className="text-4xl font-qwitcher-grypen font-normal text-black tracking-wide relative">
                <span 
                  className={`inline-block relative ${
                    isWritten ? '' : 'opacity-0'
                  }`}
                  style={{
                    animation: isWritten ? 'handwriting 2s ease-out forwards' : 'none',
                    clipPath: isWritten ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                    transition: 'clip-path 2s ease-out'
                  }}
                >
                  SouadAziz
                  {isWritten && (
                    <span 
                      className="absolute -right-2 top-0 w-0.5 h-full bg-primary-600 opacity-80"
                      style={{
                        animation: 'pen 2s ease-out forwards, blink 0.8s infinite 2s'
                      }}
                    />
                  )}
                </span>
              </div>
              <div 
                className="text-1xl font-display font-normal text-black tracking-wide -mt-1"
                style={{
                  transform: 'translateY(32px)',
                  opacity: 0,
                  animation: isWritten ? 'slideUp 1s ease-out 0.5s forwards' : 'none'
                }}
              >
                ART
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
