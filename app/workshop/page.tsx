import Image from 'next/image';
import Link from 'next/link';
import { Palette, Monitor, Clock, Award, Brush, Heart, Video, Download, MessageSquare, Wifi } from 'lucide-react';

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
      description: 'Accès à toutes les vidéos, guides PDF et listes de matériel téléchargeables à vie.'
    },
    {
      icon: MessageSquare,
      title: 'Suivi Personnalisé',
      description: 'Groupe WhatsApp privé pour poser vos questions et recevoir des conseils entre les cours.'
    },
    {
      icon: Wifi,
      title: 'Accès Flexible',
      description: 'Participez depuis chez vous, replays disponibles si vous manquez une session.'
    }
  ];

  const workshopTypes = [
    {
      title: 'Formation Débutant',
      duration: '4 semaines',
      price: '890 MAD',
      description: 'Programme complet en ligne pour apprendre les bases de la peinture depuis chez vous.',
      includes: ['4 sessions live de 2h', 'Replays à vie', 'Liste matériel PDF', 'Groupe WhatsApp privé']
    },
    {
      title: 'Masterclass Avancée',
      duration: '6 semaines',
      price: '1490 MAD',
      description: 'Perfectionnez vos techniques avec des projets avancés et un suivi personnalisé.',
      includes: ['6 sessions live de 2h30', 'Critiques individuelles', 'Ressources bonus', 'Certificat numérique']
    },
    {
      title: 'Coaching Privé',
      duration: 'Flexible',
      price: 'À partir de 750 MAD/h',
      description: 'Cours particulier en visioconférence adapté à vos objectifs artistiques spécifiques.',
      includes: ['Sessions 1-to-1', 'Programme sur mesure', 'Suivi WhatsApp illimité', 'Replay personnel']
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
                Formations Peinture en Ligne
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Apprenez la peinture depuis le confort de votre foyer ! Nos formations en ligne 
                vous offrent un apprentissage flexible et interactif avec une artiste professionnelle.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sessions live, replays disponibles, suivi personnalisé et communauté bienveillante 
                pour progresser à votre rythme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
                >
                  <Video className="h-5 w-5 mr-2" />
                  S'inscrire maintenant
                </Link>
                <Link
                  href="#tarifs"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors duration-200"
                >
                  Voir les formations
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Formation peinture en ligne"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Pourquoi choisir nos formations en ligne ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode d'apprentissage moderne et flexible qui s'adapte à votre rythme de vie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              Nos Formations en Ligne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des programmes structurés pour apprendre la peinture à distance avec un suivi professionnel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopTypes.map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{workshop.price}</div>
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
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Réalisations de nos Élèves en Ligne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les magnifiques créations réalisées à distance par nos étudiants depuis chez eux
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={`https://images.unsplash.com/photo-${1580130544207 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80`}
                  alt={`Création d'élève ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Prêt à commencer votre formation ?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Rejoignez notre communauté d'artistes en ligne et développez vos talents depuis chez vous, 
            à votre rythme et avec un accompagnement professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              <Video className="h-5 w-5 mr-2" />
              Commencer ma formation
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
