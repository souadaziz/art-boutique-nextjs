'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';
import { artworks } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import ArtworkCard from '@/components/ArtworkCard';

export default function ArtworkDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const artwork = artworks.find(art => art.id === params.id);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Œuvre non trouvée</h1>
          <Link
            href="/boutique"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  // Get related artworks (same category, excluding current)
  const relatedArtworks = artworks
    .filter(art => art.category === artwork.category && art.id !== artwork.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(artwork);
    }
    setQuantity(1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: artwork.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                {artwork.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
                {artwork.title}
              </h1>
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                {artwork.price} MAD
              </p>
              
              {!artwork.available && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-800 font-medium">Cette œuvre a été vendue</p>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Artwork Details */}
            <div className="mb-8 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Détails</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Dimensions:</span>
                  <p className="font-medium">{artwork.dimensions}</p>
                </div>
                <div>
                  <span className="text-gray-500">Technique:</span>
                  <p className="font-medium">{artwork.technique}</p>
                </div>
                <div>
                  <span className="text-gray-500">Année:</span>
                  <p className="font-medium">{artwork.year}</p>
                </div>
                <div>
                  <span className="text-gray-500">Artiste:</span>
                  <p className="font-medium">{artwork.artist}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            {artwork.available && (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-gray-700">Quantité:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-gray-500 hover:text-gray-700"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-md border transition-colors duration-200 ${
                      isWishlisted
                        ? 'bg-red-50 border-red-200 text-red-600'
                        : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>✓ Livraison gratuite au Maroc</p>
              <p>✓ Retour possible sous 14 jours</p>
              <p>✓ Certificat d'authenticité inclus</p>
            </div>
          </div>
        </div>

        {/* Related Artworks */}
        {relatedArtworks.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Œuvres Similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArtworks.map((relatedArtwork) => (
                <ArtworkCard key={relatedArtwork.id} artwork={relatedArtwork} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
