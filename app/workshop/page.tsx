'use client';

import Link from 'next/link';
import { Palette, Monitor, Clock, Award, Brush, Heart, Video, Download, MessageSquare, Wifi } from 'lucide-react';
import WorkshopHeroCarousel from '@/components/WorkshopHeroCarousel';

export default function WorkshopPage() {
  const workshopFeatures = [
    {
      icon: Video,
      title: 'Cours en Direct',
      description: 'Sessions live interactives via Zoom avec démonstrations en temps réel et échanges directs.'
    },
    {
      icon: Download,
      title: 'Ressources Incluses',
      description: 'Accès à toutes les vidéos, guides PDF et listes de matériel téléchargeables à vie.\nPour les workshops: tout le matériel est fourni.'
    },
    {
      icon: MessageSquare,
      title: 'Suivi Personnalisé',
      description: 'Groupe WhatsApp privé pour poser vos questions et recevoir des conseils entre les cours.'
    }
  ];

  const workshopTypes = [
    {
      title: 'Formation Débutant',
      duration: '4 semaines',
      price: ' ',
      description: 'Programme complet en ligne pour apprendre les bases de la peinture depuis chez vous.',
      includes: ['4 sessions live de 1h', 'Liste matériel PDF', 'Groupe WhatsApp privé']
    },
    {
      title: 'Coaching Privé',
      duration: 'Flexible',
      price: ' ',
      description: 'Cours particulier en visioconférence adapté à vos objectifs artistiques spécifiques.',
      includes: ['Sessions 1-to-1', 'Programme sur mesure', 'Suivi WhatsApp illimité']
    },
    {
      title: 'Art-Tea Session',
      duration: '2 Heures',
      price: ' ',
      description: 'Conçus pour groupe d\'adultes et familles, offrant un cadre de détente et de co-création pour l\'acquisition de compétences techniques, idéal pour la consolidation des liens et l\'initiation collective aux arts.',
      includes: ['Matériel fourni', 'Thème intuitif ', 'Repartez avec votre création']
    },
    {
      title: '"Les Petites Mains"',
      duration: '2 Heures',
      price: ' ',
      description: 'Un laboratoire créatif où enfants et adolescents développent l\'audace picturale, la maîtrise des bases techniques de la peinture tout en cultivant le bien-être et l\'expression personnelle sans limite.',
      includes: ['Matériel fourni', 'Thème intuitif', 'Repartez avec votre création']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                WORKSHOP
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bienvenue à mes fomations et workshops artistiques, où vous pouvez apprendre à créer votre propre oeuvre d'art et/ou à vivre une expérience artistique unique seul ou en groupe. 
                En profitant de mes conseils et suivant les étapes de mon process de travail, 
                Ces workshops plein d'échange et de partage vous offre un espace d'expression et d'expérimentation, 
                vous allez apprendre à vous connecter à la matière et aux couleurs, 
                à découvrir vos émotion et surtout à dépasser la peur et le contrôle, 
                de découvrir la perfection dans l'imperfection.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NB : Aucune expérience en peinture n'est nécessaire pour profiter de ce cours.
              </p>
              <div className="flex justify-start">
                <button
                  onClick={() => {
                    const element = document.getElementById('tarifs');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 cursor-pointer z-10 relative"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Voir plus...
                </button>
              </div>
            </div>
            <div className="relative">
              <WorkshopHeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Pourquoi choisir nos formations/workshops ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode d'apprentissage moderne et flexible qui s'adapte à votre rythme de vie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types Section */}
      <section id="tarifs" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Nos Formations/Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Éveillez votre créativité et libérez votre esprit avec nos formations d'art intuitif.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {workshopTypes.map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  {<div className="text-1xl font-bold text-primary-600 mb-2">{workshop.price}</div>}
                  <div className="text-gray-500">{workshop.duration}</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                <ul className="space-y-3 mb-8">
                  {workshop.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <Heart className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
                >
                  S'inscrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <div className="mb-8">
            <p className="text-lg text-primary-100 mb-6">
              Ce que vous allez apprendre :
            </p>
            <ul className="space-y-3 mb-6 max-w-lg mx-auto text-left">
              <li className="flex items-center text-primary-100">
                <Heart className="h-4 w-4 text-primary-200 mr-3 flex-shrink-0" />
                Découvrir et maîtriser les bases de l'art intuitif
              </li>
              <li className="flex items-center text-primary-100">
                <Heart className="h-4 w-4 text-primary-200 mr-3 flex-shrink-0" />
                Explorer différentes techniques de peinture
              </li>
              <li className="flex items-center text-primary-100">
                <Heart className="h-4 w-4 text-primary-200 mr-3 flex-shrink-0" />
                Utiliser les couleurs pour exprimer vos émotions
              </li>
              <li className="flex items-center text-primary-100">
                <Heart className="h-4 w-4 text-primary-200 mr-3 flex-shrink-0" />
                Développer votre confiance en vous et votre créativité
              </li>
              <li className="flex items-center text-primary-100">
                <Heart className="h-4 w-4 text-primary-200 mr-3 flex-shrink-0" />
                Vivre une expérience artistique collective
              </li>
            </ul>
            <p className="text-lg text-primary-100">
              Prêt à vous lancer dans cette aventure créative ?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Video className="h-5 w-5 mr-2" />
              Commencer
            </Link>
            <Link
              href="/boutique"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Voir la galerie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
