import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Palette, Users } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Œuvres vendues', value: '500+', icon: Award },
    { label: 'Artistes partenaires', value: '50+', icon: Users },
    { label: 'Années d\'expérience', value: '15+', icon: Heart },
    { label: 'Techniques maîtrisées', value: '20+', icon: Palette },
  ];

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Fondatrice & Curatrice',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Passionnée d\'art depuis l\'enfance, Marie a créé cette boutique pour partager sa vision unique de l\'art contemporain.'
    },
    {
      name: 'Pierre Martin',
      role: 'Expert en Art Classique',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Historien de l\'art diplômé, Pierre apporte son expertise pour authentifier et présenter nos œuvres classiques.'
    },
    {
      name: 'Sophie Laurent',
      role: 'Responsable Relations Artistes',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Sophie découvre et accompagne les artistes émergents, créant des ponts entre créateurs et collectionneurs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Notre Passion pour l'Art
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Depuis plus de 15 ans, nous sélectionnons avec passion les plus belles œuvres d'art 
                pour enrichir votre quotidien et sublimer vos espaces de vie.
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
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Galerie d'art"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              Tout a commencé en 2008, lorsque Marie Dubois, jeune diplômée en histoire de l'art, 
              a ouvert sa première galerie dans le quartier artistique de Montmartre. Sa vision était simple : 
              rendre l'art accessible à tous, en créant un pont entre les artistes talentueux et les amateurs d'art.
            </p>
            <p>
              Au fil des années, notre boutique s'est développée, accueillant des œuvres d'artistes émergents 
              comme confirmés. Nous avons tissé des liens privilégiés avec une communauté d'artistes passionnés, 
              chacun apportant sa sensibilité unique à notre collection.
            </p>
            <p>
              Aujourd'hui, nous sommes fiers de proposer une sélection éclectique d'œuvres d'art, 
              allant de la peinture contemporaine à la sculpture classique, en passant par la photographie 
              et les créations numériques. Chaque pièce est choisie avec soin pour sa qualité artistique 
              et son potentiel émotionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée d'experts en art, dédiée à vous accompagner 
              dans votre découverte artistique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
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
                Nous sélectionnons chaque œuvre avec amour et expertise, 
                guidés par notre passion pour l'art authentique.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Qualité</h3>
              <p className="text-primary-100">
                Nous garantissons l'authenticité et la qualité de chaque œuvre, 
                avec certificat d'authenticité inclus.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proximité</h3>
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
            Explorez notre collection unique et trouvez l'œuvre qui parlera à votre cœur.
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
