import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.packages': 'Pacotes',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Descubra Manaus e a Amazônia com a Janauatour',
    'hero.subtitle': 'Experiências únicas, passeios exclusivos e atendimento multilíngue para turistas do Brasil e do mundo.',
    'hero.cta1': 'Quero um orçamento',
    'hero.cta2': 'Ver Pacotes',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Oferecemos soluções completas para que sua viagem à Amazônia seja segura, organizada e inesquecível.',
    'services.packages': 'Pacotes Turísticos Personalizados',
    'services.packages.desc': 'Roteiros pensados para famílias, casais, aventureiros e grupos.',
    'services.tours': 'Passeios nos Principais Pontos Turísticos',
    'services.tours.desc': 'Encontro das Águas, Botos, Tribos, Floresta, City Tour e mais.',
    'services.accommodation': 'Hospedagem',
    'services.accommodation.desc': 'Hotéis e pousadas selecionadas com excelente localização.',
    'services.vehicles': 'Aluguel de Veículos',
    'services.vehicles.desc': 'Parceiros confiáveis, veículos novos e atendimento 24h.',
    'services.transfer': 'Translado Aeroporto ⇄ Hotel',
    'services.transfer.desc': 'Transporte pontual, seguro e confortável.',
    'services.experiences': 'Experiências Amazônicas Imersivas',
    'services.experiences.desc': 'Dormir na selva, trilhas, comunidades ribeirinhas, pesca tradicional.',
    
    // Packages
    'packages.title': 'Pacotes em Destaque',
    'packages.from': 'A partir de',
    'packages.amazon3d': 'Amazônia 3 dias',
    'packages.amazon3d.desc': 'Hospedagem + Passeios + Guia incluso',
    'packages.meeting': 'Encontro das Águas',
    'packages.meeting.desc': 'Passeio completo com guia bilíngue',
    'packages.dolphins': 'Nado com Botos',
    'packages.dolphins.desc': 'Experiência única na vida',
    'packages.citytour': 'City Tour Manaus',
    'packages.citytour.desc': 'Teatro Amazonas, Mercado Municipal, Ponta Negra',
    'packages.button': 'Saiba Mais',
    
    // Testimonials
    'testimonials.title': 'O Que Dizem Nossos Clientes',
    'testimonials.1': 'Experiência incrível com a Janauatour! Super recomendo.',
    'testimonials.2': 'A equipe da Janauatour foi muito acolhedora.',
    'testimonials.3': 'Tout était parfait ! Merci Janauatour.',
    'testimonials.4': 'Experiencia maravillosa, volveré pronto.',
    
    // About
    'about.title': 'Sobre a Janauatour',
    'about.text': 'A Janauatour nasceu com o propósito de conectar pessoas ao coração da Amazônia. Com anos de experiência, guias credenciados e atendimento multilíngue, oferecemos segurança, conforto e vivências únicas na maior floresta tropical do planeta.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para criar sua experiência amazônica perfeita',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.whatsapp': 'Fale pelo WhatsApp',
    
    // Footer
    'footer.description': 'Sua porta de entrada para a Amazônia',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.social': 'Redes Sociais',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.packages': 'Packages',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Discover Manaus and the Amazon with Janauatour',
    'hero.subtitle': 'Unique experiences, exclusive tours and multilingual service for tourists from Brazil and around the world.',
    'hero.cta1': 'Get a Quote',
    'hero.cta2': 'View Packages',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer complete solutions to make your trip to the Amazon safe, organized and unforgettable.',
    'services.packages': 'Custom Tour Packages',
    'services.packages.desc': 'Itineraries designed for families, couples, adventurers and groups.',
    'services.tours': 'Tours at Main Tourist Spots',
    'services.tours.desc': 'Meeting of Waters, Dolphins, Tribes, Forest, City Tour and more.',
    'services.accommodation': 'Accommodation',
    'services.accommodation.desc': 'Selected hotels and inns with excellent location.',
    'services.vehicles': 'Vehicle Rental',
    'services.vehicles.desc': 'Reliable partners, new vehicles and 24/7 service.',
    'services.transfer': 'Airport ⇄ Hotel Transfer',
    'services.transfer.desc': 'Punctual, safe and comfortable transportation.',
    'services.experiences': 'Immersive Amazon Experiences',
    'services.experiences.desc': 'Sleep in the jungle, trails, riverside communities, traditional fishing.',
    
    // Packages
    'packages.title': 'Featured Packages',
    'packages.from': 'From',
    'packages.amazon3d': 'Amazon 3 Days',
    'packages.amazon3d.desc': 'Accommodation + Tours + Guide included',
    'packages.meeting': 'Meeting of Waters',
    'packages.meeting.desc': 'Complete tour with bilingual guide',
    'packages.dolphins': 'Swim with Dolphins',
    'packages.dolphins.desc': 'Once in a lifetime experience',
    'packages.citytour': 'Manaus City Tour',
    'packages.citytour.desc': 'Amazon Theatre, Municipal Market, Ponta Negra',
    'packages.button': 'Learn More',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.1': 'Incredible experience with Janauatour! Highly recommend.',
    'testimonials.2': 'The Janauatour team was very welcoming.',
    'testimonials.3': 'Everything was perfect! Thank you Janauatour.',
    'testimonials.4': 'Wonderful experience, I will be back soon.',
    
    // About
    'about.title': 'About Janauatour',
    'about.text': 'Janauatour was born with the purpose of connecting people to the heart of the Amazon. With years of experience, certified guides and multilingual service, we offer safety, comfort and unique experiences in the largest tropical forest on the planet.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are ready to create your perfect Amazon experience',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    
    // Footer
    'footer.description': 'Your gateway to the Amazon',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.packages': 'Paquetes',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Descubra Manaos y la Amazonia con Janauatour',
    'hero.subtitle': 'Experiencias únicas, tours exclusivos y servicio multilingüe para turistas de Brasil y del mundo.',
    'hero.cta1': 'Solicitar Cotización',
    'hero.cta2': 'Ver Paquetes',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Ofrecemos soluciones completas para que su viaje a la Amazonia sea seguro, organizado e inolvidable.',
    'services.packages': 'Paquetes Turísticos Personalizados',
    'services.packages.desc': 'Itinerarios pensados para familias, parejas, aventureros y grupos.',
    'services.tours': 'Tours en los Principales Puntos Turísticos',
    'services.tours.desc': 'Encuentro de Aguas, Delfines, Tribus, Bosque, City Tour y más.',
    'services.accommodation': 'Alojamiento',
    'services.accommodation.desc': 'Hoteles y posadas seleccionadas con excelente ubicación.',
    'services.vehicles': 'Alquiler de Vehículos',
    'services.vehicles.desc': 'Socios confiables, vehículos nuevos y servicio 24h.',
    'services.transfer': 'Traslado Aeropuerto ⇄ Hotel',
    'services.transfer.desc': 'Transporte puntual, seguro y cómodo.',
    'services.experiences': 'Experiencias Amazónicas Inmersivas',
    'services.experiences.desc': 'Dormir en la selva, senderos, comunidades ribereñas, pesca tradicional.',
    
    // Packages
    'packages.title': 'Paquetes Destacados',
    'packages.from': 'Desde',
    'packages.amazon3d': 'Amazonia 3 Días',
    'packages.amazon3d.desc': 'Alojamiento + Tours + Guía incluido',
    'packages.meeting': 'Encuentro de Aguas',
    'packages.meeting.desc': 'Tour completo con guía bilingüe',
    'packages.dolphins': 'Nado con Delfines',
    'packages.dolphins.desc': 'Experiencia única en la vida',
    'packages.citytour': 'City Tour Manaos',
    'packages.citytour.desc': 'Teatro Amazonas, Mercado Municipal, Ponta Negra',
    'packages.button': 'Saber Más',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.1': 'Experiencia increíble con Janauatour! Super recomiendo.',
    'testimonials.2': 'El equipo de Janauatour fue muy acogedor.',
    'testimonials.3': 'Todo estuvo perfecto! Gracias Janauatour.',
    'testimonials.4': 'Experiencia maravillosa, volveré pronto.',
    
    // About
    'about.title': 'Acerca de Janauatour',
    'about.text': 'Janauatour nació con el propósito de conectar personas al corazón de la Amazonia. Con años de experiencia, guías certificados y servicio multilingüe, ofrecemos seguridad, confort y vivencias únicas en el mayor bosque tropical del planeta.',
    
    // Contact
    'contact.title': 'Contacte Con Nosotros',
    'contact.subtitle': 'Estamos listos para crear su experiencia amazónica perfecta',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.whatsapp': 'Hablar por WhatsApp',
    
    // Footer
    'footer.description': 'Su puerta de entrada a la Amazonia',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes Sociales',
    'footer.rights': 'Todos los derechos reservados.',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.packages': 'Forfaits',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Découvrez Manaus et l\'Amazonie avec Janauatour',
    'hero.subtitle': 'Expériences uniques, circuits exclusifs et service multilingue pour les touristes du Brésil et du monde entier.',
    'hero.cta1': 'Demander un Devis',
    'hero.cta2': 'Voir les Forfaits',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Nous offrons des solutions complètes pour que votre voyage en Amazonie soit sûr, organisé et inoubliable.',
    'services.packages': 'Forfaits Touristiques Personnalisés',
    'services.packages.desc': 'Itinéraires pensés pour les familles, les couples, les aventuriers et les groupes.',
    'services.tours': 'Circuits aux Principaux Sites Touristiques',
    'services.tours.desc': 'Rencontre des Eaux, Dauphins, Tribus, Forêt, City Tour et plus.',
    'services.accommodation': 'Hébergement',
    'services.accommodation.desc': 'Hôtels et auberges sélectionnés avec excellent emplacement.',
    'services.vehicles': 'Location de Véhicules',
    'services.vehicles.desc': 'Partenaires fiables, véhicules neufs et service 24h.',
    'services.transfer': 'Transfert Aéroport ⇄ Hôtel',
    'services.transfer.desc': 'Transport ponctuel, sûr et confortable.',
    'services.experiences': 'Expériences Amazoniennes Immersives',
    'services.experiences.desc': 'Dormir dans la jungle, sentiers, communautés riveraines, pêche traditionnelle.',
    
    // Packages
    'packages.title': 'Forfaits en Vedette',
    'packages.from': 'À partir de',
    'packages.amazon3d': 'Amazonie 3 Jours',
    'packages.amazon3d.desc': 'Hébergement + Circuits + Guide inclus',
    'packages.meeting': 'Rencontre des Eaux',
    'packages.meeting.desc': 'Circuit complet avec guide bilingue',
    'packages.dolphins': 'Nager avec les Dauphins',
    'packages.dolphins.desc': 'Expérience unique dans une vie',
    'packages.citytour': 'Visite de la Ville de Manaus',
    'packages.citytour.desc': 'Théâtre Amazonas, Marché Municipal, Ponta Negra',
    'packages.button': 'En Savoir Plus',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.1': 'Expérience incroyable avec Janauatour! Je recommande vivement.',
    'testimonials.2': 'L\'équipe de Janauatour était très accueillante.',
    'testimonials.3': 'Tout était parfait! Merci Janauatour.',
    'testimonials.4': 'Expérience merveilleuse, je reviendrai bientôt.',
    
    // About
    'about.title': 'À Propos de Janauatour',
    'about.text': 'Janauatour est né dans le but de connecter les gens au cœur de l\'Amazonie. Avec des années d\'expérience, des guides certifiés et un service multilingue, nous offrons sécurité, confort et expériences uniques dans la plus grande forêt tropicale de la planète.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Nous sommes prêts à créer votre expérience amazonienne parfaite',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.whatsapp': 'Parler sur WhatsApp',
    
    // Footer
    'footer.description': 'Votre porte d\'entrée vers l\'Amazonie',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Réseaux Sociaux',
    'footer.rights': 'Tous droits réservés.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
