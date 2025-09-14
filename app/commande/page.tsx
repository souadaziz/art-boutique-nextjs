'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import CloudinaryImage from '@/components/CloudinaryImage';
import { CheckCircle, ArrowLeft, AlertCircle } from 'lucide-react';

export default function CommandePage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: 'Maroc',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState('MA');
  const [errors, setErrors] = useState({
    email: '',
    telephone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Countries with phone codes and validation patterns
  const countries = [
    { 
      code: 'MA', 
      name: 'Maroc', 
      phoneCode: '+212', 
      flag: '🇲🇦',
      pattern: /^(\+212\s?[5-7]\d{8}|0[5-7]\d{8}|\+212\s?[5-7]\d{2}\s?\d{3}\s?\d{3}|0[5-7]\d{2}\s?\d{3}\s?\d{3})$/,
      placeholder: '+212 6XX XXX XXX'
    },
    { 
      code: 'FR', 
      name: 'France', 
      phoneCode: '+33', 
      flag: '🇫🇷',
      pattern: /^(\+33\s?[1-9]\d{8}|0[1-9]\d{8}|\+33\s?[1-9]\d{2}\s?\d{3}\s?\d{3}|0[1-9]\d{2}\s?\d{3}\s?\d{3})$/,
      placeholder: '+33 6XX XXX XXX'
    },
    { 
      code: 'ES', 
      name: 'Espagne', 
      phoneCode: '+34', 
      flag: '🇪🇸',
      pattern: /^(\+34\s?[6-9]\d{8}|[6-9]\d{8}|\+34\s?[6-9]\d{2}\s?\d{3}\s?\d{3}|[6-9]\d{2}\s?\d{3}\s?\d{3})$/,
      placeholder: '+34 6XX XXX XXX'
    },
    { 
      code: 'BE', 
      name: 'Belgique', 
      phoneCode: '+32', 
      flag: '🇧🇪',
      pattern: /^(\+32\s?4\d{8}|04\d{8}|\+32\s?4\d{2}\s?\d{3}\s?\d{3}|04\d{2}\s?\d{3}\s?\d{3})$/,
      placeholder: '+32 4XX XXX XXX'
    },
    { 
      code: 'CA', 
      name: 'Canada', 
      phoneCode: '+1', 
      flag: '🇨🇦',
      pattern: /^(\+1\s?\d{10}|\d{10}|\+1\s?\d{3}\s?\d{3}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4})$/,
      placeholder: '+1 XXX XXX XXXX'
    }
  ];

  // Validation functions
  const validateEmail = (email: string): string => {
    if (!email) return 'L\'adresse email est requise';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Veuillez saisir une adresse email valide (exemple: nom@domaine.com)';
    }
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone) return 'Le numéro de téléphone est requis';
    
    const selectedCountryData = countries.find(c => c.code === selectedCountry);
    if (!selectedCountryData) return 'Pays non valide';
    
    const cleanPhone = phone.replace(/\s/g, '');
    if (!selectedCountryData.pattern.test(cleanPhone)) {
      return `Veuillez saisir un numéro de téléphone valide pour ${selectedCountryData.name} (exemple: ${selectedCountryData.placeholder})`;
    }
    return '';
  };

  // Get current country data
  const getCurrentCountry = () => {
    return countries.find(c => c.code === selectedCountry) || countries[0];
  };

  // Handle country change
  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const country = countries.find(c => c.code === countryCode);
    if (country) {
      // Auto-populate country code in phone field if empty or update existing
      const currentPhone = formData.telephone;
      if (!currentPhone || currentPhone.startsWith('+')) {
        setFormData(prev => ({
          ...prev,
          telephone: country.phoneCode + ' '
        }));
      }
      // Clear phone validation error when country changes
      setErrors(prev => ({
        ...prev,
        telephone: ''
      }));
    }
  };

  // Initialize phone code on component mount
  useEffect(() => {
    const country = getCurrentCountry();
    if (country && !formData.telephone) {
      setFormData(prev => ({
        ...prev,
        telephone: country.phoneCode + ' '
      }));
    }
  }, []);

  // Rediriger si le panier est vide
  useEffect(() => {
    if (items.length === 0 && !isSubmitted) {
      router.push('/boutique');
    }
  }, [items, router, isSubmitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for email and phone
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else if (name === 'telephone') {
      setErrors(prev => ({
        ...prev,
        telephone: validatePhone(value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.telephone);
    
    setErrors({
      email: emailError,
      telephone: phoneError
    });
    
    // If there are validation errors, don't submit
    if (emailError || phoneError) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'commande',
          ...formData,
          items,
          total
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la commande');
      }

      const result = await response.json();
      console.log('Email envoyé:', result);

      setIsSubmitted(true);
      clearCart();
      setErrors({ email: '', telephone: '' });
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi de votre commande. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Commande envoyée !</h1>
          <p className="text-gray-600 mb-6">
            Votre demande de commande a été envoyée par email. Nous vous contacterons rapidement pour confirmer votre commande et organiser la livraison.
          </p>
          <button
            onClick={() => router.push('/boutique')}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Retour à la boutique
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Finaliser votre commande</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations de livraison</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-primary-500 focus:border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <div className="flex gap-2">
                  {/* Country Selector */}
                  <select
                    value={selectedCountry}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-w-[140px]"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                  
                  {/* Phone Input */}
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 ${
                      errors.telephone 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-primary-500 focus:border-transparent'
                    }`}
                    placeholder={getCurrentCountry().placeholder}
                  />
                </div>
                {errors.telephone && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errors.telephone}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse *
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  required
                  value={formData.adresse}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="ville"
                    name="ville"
                    required
                    value={formData.ville}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">
                    Code Postal
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="pays" className="block text-sm font-medium text-gray-700 mb-1">
                    Pays *
                  </label>
                  <select
                    id="pays"
                    name="pays"
                    required
                    value={formData.pays}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="Maroc">Maroc</option>
                    <option value="France">France</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Instructions spéciales, questions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Confirmer la commande'}
              </button>
            </form>
          </div>

          {/* Résumé de la commande */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Résumé de la commande</h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.artwork.id} className="flex items-center space-x-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <CloudinaryImage
                      publicId={item.artwork.cloudinaryId || ''}
                      alt={item.artwork.title}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover object-center"
                      fallbackSrc={item.artwork.image}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.artwork.title}</h3>
                    <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.artwork.price * item.quantity} MAD
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>{total} MAD</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Frais de livraison à confirmer selon la destination.
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-500 space-y-2">
              <p>✓ Livraison au Maroc: Gratuite</p>
              <p>✓ Livraison Partout dans le monde: Contactez-nous</p>
              <p>✓ Certificat d'authenticité inclus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
