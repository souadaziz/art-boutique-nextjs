import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              SouadAzizArt
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Découvrez une collection unique d'œuvres d'art originales créées avec passion par l'artiste Souad Aziz. 
              Chaque pièce raconte une histoire et apporte beauté et émotion à votre espace.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/souad_aziz_art?igsh=ZWFyM2w2ZzJoYjBo " 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/share/19rJY77j3i/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/art-sur-mesure" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Art sur Mesure
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Workshop
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">souadazizart@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">+212 603 693 799</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">Chichaoua, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SouadAzizArt. Tous droits réservés. Créé avec passion pour l'art.
          </p>
        </div>
      </div>
    </footer>
  );
}
