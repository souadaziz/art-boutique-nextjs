import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Palette, Users } from 'lucide-react';

export default function AboutPage() {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                A propos
              </h1>
              <p className="text-1xl text-gray-600 mb-8 leading-relaxed">
              Souad Aziz est née au cœur des montagnes du Moyen Atlas au Maroc, connues par leur beauté naturelle et leur richesse culturelle, ce qui lui a permis, de façon innée, d'avoir un lien fort avec la nature et ses composantes dans son contexte artistique, émotionnel et spirituel.
              </p>
              <p className="text-1xl text-gray-600 mb-8 leading-relaxed">
              Malgré son cursus scolaire scientifique Intense finissant par un parcours professionnel en Ingénierie, elle a su garder ce lien profond avec la nature. Après la pandémie, elle a repris contact avec sa passion d'enfance lui permettant de s'exprimer, créer et de partager avec vous son art et son expérience artistique.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                Découvrir notre collection
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/souad-aziz-portrait.jpg"
                  alt="Souad Aziz - Artiste"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
              <p className="text-primary-100">
                Chaque œuvre est réalisée avec beaucoup d'amour, et chaque commande est née d'un profond échange et écoute de vos besoins.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Qualité</h3>
              <p className="text-primary-100">
                L'authenticité et la qualité de chaque œuvre est garantie, avec un certificat d'authenticité inclus.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proximité et partage</h3>
              <p className="text-primary-100">
                Nous accompagnons nos clients dans leur découverte artistique 
                avec des conseils personnalisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Prêt à Découvrir l'Art ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          Explorez ma collection et trouvez l'œuvre qui parlera à votre cœur, 
          si vous n'êtes pas sûr de quel tableau acheter, ou si vous voulez passez une commande personnalisée, 
          laissez moi un message, j'aimerai bien échanger avec vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              Voir la collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
