import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/lib/data';

export default function HomePage() {
  // Get featured artworks by specific IDs
  const featuredIds = ['1', '3', '5', '7', '9', '11']; // Choisissez les IDs des œuvres que vous voulez
  const featuredArtworks = artworks.filter(artwork => featuredIds.includes(artwork.id));

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
              créées par l'artiste Souad AZIZ.
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
                Notre galerie d'art présente une collection unique d'œuvres contemporaines 
                et classiques, soigneusement sélectionnées pour leur qualité artistique 
                et leur capacité à émouvoir.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Chaque pièce raconte une histoire, exprime une émotion et apporte 
                une dimension artistique à votre espace de vie.
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
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
