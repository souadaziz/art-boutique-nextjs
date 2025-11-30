'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package } from 'lucide-react';
import { shopProducts, shopCategories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProducts = selectedCategory === 'Tous'
    ? shopProducts
    : shopProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/*<div className="inline-flex items-center justify-center w-32 h-32 bg-primary-100 rounded-full mb-6 overflow-hidden">
            <Image 
              src="/images/Artbox.jpeg" 
              alt="Le Lab Création" 
              width={96} 
              height={96}
              className="object-cover w-full h-full"
            />
          </div>*/}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Le Lab Création
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bienvenue dans <strong>Le Lab Création</strong>, notre laboratoire artistique ! 
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous avons conçu <strong>3 Art Box</strong> uniques pour vous faire vivre une expérience créative complète et amusante, quel que soit votre niveau.
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez votre niveau d'expérimentation et commencez à créer dès aujourd'hui !
          </p>
        
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter - Masqué temporairement */}
        {/* <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {shopCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} dans notre boutique
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts
            .sort((a, b) => parseInt(a.id.replace('p', '')) - parseInt(b.id.replace('p', '')))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Aucun produit disponible dans cette catégorie</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Besoin de conseils ?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Notre équipe est là pour vous aider à choisir le matériel adapté à vos besoins artistiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Nous Contacter
            </Link>
            <Link
              href="/workshop"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Découvrir les Workshops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
