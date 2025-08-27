'use client';

import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/lib/data';

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Notre Galerie 
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection complète d'œuvres d'art uniques et trouvez 
            la pièce parfaite pour votre espace.
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {artworks.length} œuvre{artworks.length > 1 ? 's' : ''} dans notre collection
          </p>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
}
