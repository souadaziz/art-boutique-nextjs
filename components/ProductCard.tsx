'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Package, Eye } from 'lucide-react';
import { ShopProduct } from '@/types';
import { useCart } from '@/lib/cart-context';
import CloudinaryImage from '@/components/CloudinaryImage';

interface ProductCardProps {
  product: ShopProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  // Fonction pour nettoyer le HTML de la description pour l'aperçu
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const isInStock = product.stock > 0;
  const isLowStock = product.stock > 0 && product.stock < 5;

  return (
    <Link href={`/shop/${product.id}`} className="block group bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="relative h-64 overflow-hidden flex items-center justify-center bg-gray-50">
        <CloudinaryImage
          publicId={product.cloudinaryId || ''}
          alt={product.name}
          width={400}
          height={300}
          className="object-contain h-full w-auto group-hover:scale-110 transition-transform duration-500"
          fallbackSrc={product.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions - Desktop only */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            <div className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 transform hover:scale-110">
              <Eye className="h-5 w-5" />
            </div>
            {isInStock && (
              <button
                onClick={handleAddToCart}
                className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Ajouter au panier"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Cart Button */}
        {isInStock && (
          <button
            onClick={handleAddToCart}
            className="md:hidden absolute bottom-2 right-2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        )}

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className={`font-semibold ${isInStock ? 'text-primary-600' : 'text-gray-500'}`}>
            {product.price} MAD
          </span>
        </div>

        {/* Stock Badges - Masqués temporairement */}
        {/* {!isInStock && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Rupture de stock
          </div>
        )}
        {isLowStock && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Plus que {product.stock}
          </div>
        )} */}
      </div>

      <div className="p-6">
        {/* Category - Masqué temporairement */}
        {/* <div className="mb-2">
          <span className="text-sm text-primary-500 font-medium">{product.category}</span>
          {/* Brand - Masqué temporairement */}
          {/* {product.brand && (
            <span className="text-xs text-gray-400 ml-2">• {product.brand}</span>
          )} */}
        {/* </div> */}
        <h3 className="text-xl font-display font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {stripHtml(product.description)}
        </p>
        <div className="flex items-center justify-between">
          {/* Stock - Masqué temporairement */}
          {/* <div className="text-sm text-gray-500">
            <p>En stock: {product.stock}</p>
          </div> */}
          <span className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200 ml-auto">
            Voir plus →
          </span>
        </div>
      </div>
    </Link>
  );
}
