'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/lib/data';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  // Get featured artworks by specific IDs in the exact order specified
  const featuredIds = ['5', '11', '9', '7', '25', '20']; // Choisissez les IDs des œuvres que vous voulez
  const featuredArtworks = featuredIds.map(id => artworks.find(artwork => artwork.id === id)).filter(Boolean);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail(''); // Reset form
      } else {
        setMessage(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      setMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Artworks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Œuvres Vedettes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection d'œuvres d'art exceptionnelles, 
              créées par l'artiste </p>
              <p> Souad AZIZ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/boutique"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Voir toute la collection
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                L'Art qui Inspire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
              Mon art représente la connexion profonde avec les éléments de la nature, où se rencontrent la matière, la lumière et les mouvements pour créer un sens, une émotion.
              </p>
              <p className="text-lg text-gray-600 mb-8">
              Chaque œuvre vous invite à expérimenter un moment de connexion, et apporte la sérénité et la chaleur à votre Intérieur.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors duration-200"
              >
                En savoir plus
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/art-qui-inspire.jpg"
                  alt="Atelier d'artiste"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Restez Informé
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Recevez les dernières nouvelles sur nos nouvelles œuvres et événements exclusifs.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'En cours...' : 'S\'abonner'}
              </button>
            </div>
            {message && (
              <p className={`text-sm ${message.includes('Erreur') ? 'text-red-200' : 'text-green-200'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
