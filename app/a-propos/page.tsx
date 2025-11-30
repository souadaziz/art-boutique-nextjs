'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Palette, Users, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Nadia Salam",
      role: "Ophtalmologue, Mohammadia",
      content: "Chère Souad, Je voudrais te remercier pour le tableau que tu as crée pour moi <strong><em>'vague de douceur'</em></strong> c'est un travail qui émane d'une vraie douceur et je suis tellement heureuse de l'avoir dans mon cabinet.",
      rating: 5
    },
    {
      name: "Wijdane Ettaje",
      role: "Commande personnalisée, Meknès",
      content: "Je suis profondément reconnaissante pour cette oeuvre artistique magnifique, réalisée avec patience, créativité et sensibilité.L'artiste Souad a su transformer un simple mur en une œuvre vivante, remplie de couleurs, de détails et d'émotions. Ce qui apporte de la chaleur, de l'énergie et une atmosphère unique à la pièce.<br><br>Chaque coup de pinceau reflète non seulement ton grand talent, mais aussi une passion sincère pour l'art. Merci du fond du cœur Souad pour cette œuvre qui restera longtemps un témoignage de beauté et de générosité.",
      rating: 5
    },
    {
      name: "Fayza mamad",
      role: "Dentiste, Témara",
      content: "J'ai reçu un tableau absolument magnifique ! Les détails, les couleurs et le soin apporté à la réalisation en font une véritable œuvre d'art. Il apporte une touche unique et chaleureuse à mon cabinet. Merci pour ce travail plein de passion et de talent!",
      rating: 5
    },
    {
      name: "Lucile",
      role: "Participant Workshop",
      content: "J'ai passé un super moment avec Souad, non seulement j'ai appris plein de choses sur le zellige (mosaique marocaine), mais aussi sur les associations de couleurs, et je suis très fière de la peinture que j'ai faite. J'ai trouvé l'experience très relaxante, j'en suis sortie très zen et ravie! Un grand merci.",
      rating: 5
    },
    {
      name: "Pierryl",
      role: "Participant Workshop",
      content: "Souad et sa famille ont été très accueillants, et l'activité peinture de zellige était très bien organisée. Souad est très drôle et explique très bien. Il y avait aussi une activité pour notre fille de trois ans. Je recommande !",
      rating: 5
    },
    {
      name: "Amina KHECHNI",
      role: "Commande personnalisée, Essaouira",
      content: "Le mélange des couleurs et le thème spirituel donnent une bonne vibration à mon salon, ton tableau m' inspire l'amour et l'unicité.Fière de toi, je te souhaite une très bonne continuation",
      rating: 5
    },
    {
      name: "Hervé",
      role: "Participant Workshop",
      content: "C'était vraiment un moment de grandes découvertes pour moi. Non seulement j'ai appris sur les combinaisons de couleurs mais je me suis aussi découvert une âme d'artiste. Merci beaucoup pour ce super tea-art break. C'était formidable.",
      rating: 5
    }
  
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              À propos
              </h1>
              <p className="text-1xl text-gray-600 mb-8 leading-relaxed">
              Souad Aziz est née au cœur des montagnes du Moyen Atlas au Maroc, connues par leur beauté naturelle et leur richesse culturelle, ce qui lui a permis, de façon innée, d'avoir un lien fort avec la nature et ses composantes dans son contexte artistique, émotionnel et spirituel.
              </p>
              <p className="text-1xl text-gray-600 mb-8 leading-relaxed">
              Malgré son cursus académique scientifique Intense finissant par un parcours professionnel en Ingénierie, elle a su garder ce lien profond avec la nature. Après la pandémie, elle a repris contact avec sa passion d'enfance lui permettant de s'exprimer, créer et de partager avec vous son art et son expérience artistique.
              </p>

             <h2 className="text-2xl md:text-2xl font-display font-bold text-gray-900 mb-6">
                L'Art qui Inspire
              </h2>
              <p className="text-1xl text-gray-600 mb-8 leading-relaxed">
              Mon art représente la connexion profonde avec les éléments de la nature, où se rencontrent la matière, la lumière et les mouvements pour créer un sens, une émotion. <br></br>Chaque œuvre vous invite à expérimenter un moment de connexion, et apporte la sérénité et la chaleur à votre Intérieur.
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

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Témoignages
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez ce que nos clients disent de leur expérience avec nos œuvres et formations
            </p>
          </div>
          
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                "<span dangerouslySetInnerHTML={{ __html: testimonials[currentTestimonial].content }}></span>"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary-600 font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Prêt à Découvrir mon Univers ?
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
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
