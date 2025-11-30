'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState('MA');
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const currentPhone = formData.phone;
      if (!currentPhone || currentPhone.startsWith('+')) {
        setFormData(prev => ({
          ...prev,
          phone: country.phoneCode + ' '
        }));
      }
      // Clear phone validation error when country changes
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  // Initialize phone code on component mount
  useEffect(() => {
    const country = getCurrentCountry();
    if (country && !formData.phone) {
      setFormData(prev => ({
        ...prev,
        phone: country.phoneCode + ' '
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation for email and phone
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    setErrors({
      email: emailError,
      phone: phoneError
    });
    
    // If there are validation errors, don't submit
    if (emailError || phoneError) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      const result = await response.json();
      console.log('Email envoyé:', result);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({ email: '', phone: '' });
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Av Hassan II, Hay Al Qods', '41000 Chichaoua, Maroc']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+212 6 03 69 37 99']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['souadazizart@gmail.com']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-primary-100">
            Nous sommes là pour répondre à toutes vos questions sur nos œuvres d'art 
            et vous accompagner dans votre démarche artistique.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
              Informations de Contact
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Envoyez-nous un Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Envoyé !</h3>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 transition-colors duration-200 ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                      }`}
                      placeholder="votre@email.com"
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone *
                  </label>
                  <div className="flex gap-2">
                    {/* Country Selector */}
                    <select
                      value={selectedCountry}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white min-w-[140px] transition-colors duration-200"
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
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex-1 px-4 py-3 border rounded-md focus:ring-2 transition-colors duration-200 ${
                        errors.phone 
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                      }`}
                      placeholder={getCurrentCountry().placeholder}
                    />
                  </div>
                  {errors.phone && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'informations</option>
                    <option value="commande p">Commande personnalisée</option>
                    <option value="artiste">Collaboration</option>
                    <option value="coaching">Coaching privé</option>
                    <option value="formation">Formation débutant</option>
                    <option value="arttea">Art-Tea Session</option>
                    <option value="workshop">Les Petites Mains</option>
                    <option value="autre">Autres</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
