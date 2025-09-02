import Image from 'next/image';
import Link from 'next/link';
import { Palette, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function ArtSurMesurePage() {
  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Échange personnalisé pour comprendre vos goûts, votre espace et vos attentes.'
    },
    {
      icon: Palette,
      title: 'Création',
      description: 'Réalisation de votre œuvre unique selon vos spécifications et mes inspirations.'
    },
    {
      icon: Clock,
      title: 'Suivi',
      description: 'Vous recevez des photos de l\'avancement et pouvez donner vos retours.'
    },
    {
      icon: CheckCircle,
      title: 'Livraison',
      description: 'Réception de votre œuvre d\'art personnalisée avec certificat d\'authenticité.'
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
              Une œuvre d'art juste pour toi !!
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Créons ensemble une œuvre unique qui reflète votre personnalité et s'harmonise parfaitement avec votre espace de vie.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chaque commande sur mesure est une collaboration artistique où vos idées rencontrent ma créativité pour donner naissance à une pièce exceptionnelle.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                Commencer mon projet
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/art-sur-mesure.jpg"
                  alt="Création artistique sur mesure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et collaboratif pour créer votre œuvre d'art personnalisée
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Prêt à créer votre œuvre unique ?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Contactez-moi pour discuter de votre projet artistique personnalisé. 
            Ensemble, nous donnerons vie à vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Demander un devis
            </Link>
            <Link
              href="/boutique"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Voir mes œuvres existantes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
