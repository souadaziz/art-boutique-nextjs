import { Artwork, ShopProduct } from '@/types';

export const artworks: Artwork[] = [
  {
    id: '1',
    title:'Eau d\'Azur',
    artist:'Souad Aziz',
    price:2660,
    image: '/images/artworks/EaudAzur.jpg', // Fallback local
    cloudinaryId: 'EaudAzur', // Testez avec l'image d'exemple de Cloudinary
    images: [
      '/images/artworks/EaudAzur.jpg', // Fallback local pour image 1
      '/images/artworks/EaudAzur-2.jpg', // Fallback local pour image 2
      '/images/artworks/EaudAzur-3.jpg', // Fallback local pour image 3
    ],
    cloudinaryIds: ['EaudAzur', 'EaudAzur-2', 'EaudAzur-3'], // IDs Cloudinary
    description: 'Ce mélange de couleur douce et apaisante, inspire la méditation et la sérénité.',
    category: 'Abstrait',
    dimensions: '100 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '2',
    title: 'Secret Garden',
    artist: 'Souad Aziz',
    price: 2660,
    image: '/images/artworks/SecretGarden.jpg',
    cloudinaryId: 'SecretGarden',
    images: [
      '/images/artworks/SecretGarden.jpg',
      '/images/artworks/SecretGarden-2.jpg',
      '/images/artworks/SecretGarden-3.jpg'
    ],
    cloudinaryIds: ['SecretGarden', 'SecretGarden-2', 'SecretGarden-3'],
    description: 'Une explosion de couleurs harmonieuse inspirée de la beauté florale.',
    category: 'Abstrait',
    dimensions: '100 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '3',
    title: 'Senteurs de bois',
    artist: 'Souad Aziz',
    price: 4900,
    image: '/images/artworks/senteursdebois.jpg',
    cloudinaryId: 'senteursdebois',
    images: [
      '/images/artworks/senteursdebois.jpg',
      '/images/artworks/senteursdebois-2.jpg',
      '/images/artworks/senteursdebois-3.jpg'
    ],
    cloudinaryIds: ['senteursdebois', 'senteursdebois-2', 'senteursdebois-3'],
    description: 'Ce tableau est le troisième de la série « WOOD FRAGRANCE », le mélange de couleur et leur mouvement nous emmène dans un voyage boisé.',
    category: 'Abstrait',
    dimensions: '140 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '4',
    title: 'Fleur d\'orient',
    artist: 'Souad Aziz',
    price: 2660,
    image: '/images/artworks/Fleurdorient.jpg',
    cloudinaryId: 'Fleurdorient',
    images: [
      '/images/artworks/Fleurdorient.jpg',
      '/images/artworks/Fleurdorient-2.jpg',
      '/images/artworks/Fleurdorient-3.jpg'
    ],
    cloudinaryIds: ['Fleurdorient', 'Fleurdorient-2', 'Fleurdorient-3'],
    description: 'Ce beau mélange de couleurs apaisante est inspiré de la beauté des plantes aquatiques.',
    category: 'Abstrait',
    dimensions: '100 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '5',
    title: 'Summer Rain',
    artist: 'Souad Aziz',
    price: 4900,
    image: '/images/artworks/SummerRain.jpg',
    cloudinaryId: 'SummerRain',
    images: [
      '/images/artworks/SummerRain.jpg',
      '/images/artworks/SummerRain-2.jpg',
      '/images/artworks/SummerRain-3.jpg'
    ],
    cloudinaryIds: ['SummerRain', 'SummerRain-2', 'SummerRain-3'],
    description: 'Inspiré du Ciel d\'été.',
    category: 'Abstrait',
    dimensions: '140 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '6',
    title: 'Sandalwood',
    artist: 'Souad Aziz',
    price: 3360,
    image: '/images/artworks/sandalwood.jpg',
    cloudinaryId: 'sandalwood',
    images: [
      '/images/artworks/sandalwood.jpg',
      '/images/artworks/sandalwood-2.jpg',
      '/images/artworks/sandalwood-3.jpg'
    ],
    cloudinaryIds: ['sandalwood', 'sandalwood-2', 'sandalwood-3'],
    description: 'Ce tableau est le premier de la série « WOOD FRAGRANCE », le mélange de couleur et leur mouvement nous emmène dans un voyage boisé.',
    category: 'Abstrait',
    dimensions: '120 x 80 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2022,
  },
  {
    id: '7',
    title: 'Oud',
    artist: 'Souad Aziz',
    price: 1860,
    image: '/images/artworks/oud.jpg',
    cloudinaryId: 'oud',
    images: [
      '/images/artworks/oud.jpg',
      '/images/artworks/oud-2.jpg',
      '/images/artworks/oud-3.jpg'
    ],
    cloudinaryIds: ['oud', 'oud-2', 'oud-3'],
    description: 'Ce tableau est le deuxième de la série « WOOD FRAGRANCE », le mélange de couleur et leur mouvement nous emmène dans un voyage boisé.',
    category: 'Abstrait',
    dimensions: '70 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2022,
  },
  {
    id: '8',
    title: 'Serenity',
    artist: 'Souad Aziz',
    price: 5250,
    image: '/images/artworks/serenity.jpg',
    cloudinaryId: 'serenity',
    images: [
      '/images/artworks/serenity.jpg',
      '/images/artworks/serenity-2.jpg',
      '/images/artworks/serenity-3.jpg'
    ],
    cloudinaryIds: ['serenity', 'serenity-2', 'serenity-3'],
    description: 'Excellent mélange de couleur douce et apaisante, inspire la méditation et la sérénité.',
    category: 'Abstrait',
    dimensions: '150 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '9',
    title: 'Vague de douceur',
    artist: 'Souad Aziz',
    price: 3600,
    image: '/images/artworks/vaguededouceur.jpg',
    cloudinaryId: 'vaguededouceur',
    images: [
      '/images/artworks/vaguededouceur.jpg',
      '/images/artworks/vaguededouceur-2.jpg',
      '/images/artworks/vaguededouceur-3.jpg' 
    ],
    cloudinaryIds: ['vaguededouceur', 'vaguededouceur-2', 'vaguededouceur-3'],
    description: 'Excellent mélange de couleur douce et apaisante, inspire la méditation et la sérénité.',
    category: 'Abstrait',
    dimensions: 'Triptyque 80 x 55 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2023,
  },
  {
    id: '10',
    title: 'Explosion',
    artist: 'Souad Aziz',
    price: 1500,
    image: '/images/artworks/explosion.jpg',
    cloudinaryId: 'explosion',
    images: [
      '/images/artworks/explosion.jpg'
    ],
    cloudinaryIds: ['explosion'],
    description: 'Explosion de couleurs entre le blanc et le noir.',
    category: 'Abstrait',
    dimensions: 'Triptyque 60 x 40 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2022,
  },
  {
    id: '11',
    title: 'Black\'n more',
    artist: 'Souad Aziz',
    price: 1400,
    image: '/images/artworks/Blacknmore.jpg',
    cloudinaryId: 'Blacknmore',
    images: [
      '/images/artworks/Blacknmore.jpg'
    ],
    cloudinaryIds: ['Blacknmore'],
    description: 'Explosion de couleurs brisant le noir, ce qui reflète la vie en toutes ses composantes.',
    category: 'Abstrait',
    dimensions: '70 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2021,
  },
  {
    id: '12',
    title: 'Vortex',
    artist: 'Souad Aziz',
    price: 1800,
    image: '/images/artworks/vortex.jpg',
    cloudinaryId: 'vortex',
    images: [
      '/images/artworks/vortex.jpg'
    ],
    cloudinaryIds: ['vortex'],
    description: 'Mélange et mouvement de couleurs, inspirés de l\'ambiance floral.',
    category: 'Abstrait',
    dimensions: 'Diptyque 60 x 40 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '13',
    title: 'Wisteria',
    artist: 'Souad Aziz',
    price: 2400,
    image: '/images/artworks/wisteria.jpg',
    cloudinaryId: 'wisteria',
    images: [
      '/images/artworks/wisteria.jpg',
      '/images/artworks/wisteria-2.jpg',
      '/images/artworks/wisteria-3.jpg'
    ],
    cloudinaryIds: ['wisteria', 'wisteria-2', 'wisteria-3'],
    description: 'Inspirée de la Wistéria,  ce mariage de couleurs reflète l\'harmonie et l\'élégance.',
    category: 'Abstrait',
    dimensions: ' 90 x 90 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2023,
  },
  {
    id: '14',
    title: 'Joy',
    artist: 'Souad Aziz',
    price: 5500,
    image: '/images/artworks/joy.jpg',
    cloudinaryId: 'joy',
    images: [
      '/images/artworks/joy.jpg',
      '/images/artworks/joy-2.jpg',
      '/images/artworks/joy-3.jpg'
    ],
    cloudinaryIds: ['joy', 'joy-2', 'joy-3'],
    description: 'Beau mélange de couleurs vivantes dans des mouvements harmonieux, inspire la joie de vivre.',
    category: 'Abstrait',
    dimensions: ' Triptyque 70 x 100 - 130 x 100 - 70 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '15',
    title: 'La lagune',
    artist: 'Souad Aziz',
    price: 4900,
    image: '/images/artworks/lagune.jpg',
    cloudinaryId: 'lagune',
    images: [
      '/images/artworks/lagune.jpg',
      '/images/artworks/lagune-2.jpg',
      '/images/artworks/lagune-3.jpg'
    ],
    cloudinaryIds: ['lagune', 'lagune-2', 'lagune-3'],
    description: 'Une harmonie de couleurs douces, inspiration de l\'harmonie entre le ciel et l\'eau.',
    category: 'Abstrait',
    dimensions: ' 140 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '16',
    title: 'Lotus valley',
    artist: 'Souad Aziz',
    price: 4780,
    image: '/images/artworks/lotusvalley.jpg',
    cloudinaryId: 'lotusvalley',
    images: [
      '/images/artworks/lotusvalley.jpg',
      '/images/artworks/lotusvalley-2.jpg',
      '/images/artworks/lotusvalley-3.jpg'
    ],
    cloudinaryIds: ['lotusvalley', 'lotusvalley-2', 'lotusvalley-3'],
    description: 'Une harmonie de couleurs douces, inspiration de la fleur de lotus.',
    category: 'Abstrait',
    dimensions: ' 140 x 90 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '17',
    title: 'Thalassa',
    artist: 'Souad Aziz',
    price: 1500,
    image: '/images/artworks/thalassa.jpg',
    cloudinaryId: 'thalassa',
    images: [
      '/images/artworks/thalassa.jpg',
      '/images/artworks/thalassa-2.jpg'
    ],
    cloudinaryIds: ['thalassa', 'thalassa-2'],
    description: 'Une très joli mélange de couleur qui inspiré de la beauté des profondeurs marines.',
    category: 'Abstrait',
    dimensions: ' Triptyque circulaire 50 - 40 - 30 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '18',
    title: 'Elia',
    artist: 'Souad Aziz',
    price: 2300,
    image: '/images/artworks/Elia.jpg',
    cloudinaryId: 'elia',
    images: [
      '/images/artworks/Elia.jpg',
      '/images/artworks/Elia-2.jpg',
      '/images/artworks/Elia-3.jpg'
    ],
    cloudinaryIds: ['Elia', 'Elia-2', 'Elia-3'],
    description: 'Inspiration du thème floral.',
    category: 'Abstrait',
    dimensions: ' Triptyque circulaire 60 - 50 - 40 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '19',
    title: 'Le regard',
    artist: 'Souad Aziz',
    price: 900,
    image: '/images/artworks/LeRegard.jpg',
    cloudinaryId: 'LeRegard',
    images: [
      '/images/artworks/LeRegard.jpg'
    ],
    cloudinaryIds: ['LeRegard'],
    description: 'Ce tableau met l\'accent sur l\'intensité et l\'expressivité de l\'œil du cheval. À travers un mélange de réalisme pour le regard et de touches de peinture abstraites et colorées, l\'œuvre ne se contente pas de représenter l\'animal, mais capture son essence et sa sensibilité.',
    category: 'Abstrait',
    dimensions: ' 60 x 40 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2025,
  },
  {
    id: '20',
    title: 'L\'envolée blanche',
    artist: 'Souad Aziz',
    price: 3000,
    image: '/images/artworks/envoléeBlanche.jpg',
    cloudinaryId: 'envoléeBlanche',
    images: [
      '/images/artworks/envoléeBlanche.jpg',
      '/images/artworks/envoléeBlanche-2.jpg',
      '/images/artworks/envoléeBlanche-3.jpg'
    ],
    cloudinaryIds: ['envoléeBlanche', 'envoléeBlanche-2', 'envoléeBlanche-3'],
    description: 'La danseuse amazigh du moyen atlas modernisée, un mixte de tradition dans l\'identité et le classicisme de la dance, ce tableau est une capture de mouvement en suspension, une dance d\'esprit.',
    category: 'Figuratif contemporain',
    dimensions: ' 100 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2025,
  },
  {
    id: '21',
    title: 'Miroir des Eaux',
    artist: 'Souad Aziz',
    price: 1000,
    image: '/images/artworks/MiroirdesEaux.jpg',
    cloudinaryId: 'MiroirdesEaux',
    images: [
      '/images/artworks/MiroirdesEaux.jpg',
      '/images/artworks/MiroirdesEaux-2.jpg',
      '/images/artworks/MiroirdesEaux-3.jpg',
      '/images/artworks/MiroirdesEaux-4.jpg',
      '/images/artworks/MiroirdesEaux-5.jpg'

    ],
    cloudinaryIds: ['MiroirdesEaux', 'MiroirdesEaux-2', 'MiroirdesEaux-3', 'MiroirdesEaux-4', 'MiroirdesEaux-5'],
    description: 'Excellent mélange de couleur mouvementé, en le méditant, on voyage dans nos profondeurs.',
    category: 'Abstrait',
    dimensions: ' Cerculaire 60 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2025,
  },
  {
    id: '22',
    title: 'Tierra-Mar',
    artist: 'Souad Aziz',
    price: 3360,
    image: '/images/artworks/tierramar.jpg',
    cloudinaryId: 'tierramar',
    images: [
      '/images/artworks/tierramar.jpg',
      '/images/artworks/tierramar-2.jpg',
      '/images/artworks/tierramar-3.jpg'
    ],
    cloudinaryIds: ['tierramar', 'tierramar-2', 'tierramar-3'],
    description: 'Une explosion de couleurs vives représentant la complémentarité entre vie terrestre et marine, évoquant le mouvement de l\'existence.',
    category: 'Abstrait',
    dimensions: ' 120 x 80 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '23',
    title: 'Fall',
    artist: 'Souad Aziz',
    price: 3000,
    image: '/images/artworks/fall.jpg',
    cloudinaryId: 'fall',
    images: [
      '/images/artworks/fall.jpg',
      '/images/artworks/fall-2.jpg',
      '/images/artworks/fall-3.jpg'
    ],
    cloudinaryIds: ['fall', 'fall-2','fall-3'],
    description: 'Un paysage travaillé avec un mariage de couleurs douce parfait pour les amoureux de l\'ambiance  automnale.',
    category: 'Abstrait',
    dimensions: ' 100 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '24',
    title: 'Reflexion',
    artist: 'Souad Aziz',
    price: 1000,
    image: '/images/artworks/reflexion.jpg',
    cloudinaryId: 'reflexion',
    images: [
      '/images/artworks/reflexion.jpg',
      '/images/artworks/reflexion-2.jpg'
    ],
    cloudinaryIds: ['reflexion', 'reflexion-2'],
    description: 'Excellent mélange de couleur douce et apaisante, inspire la méditation et la sérénité.',
    category: 'Abstrait',
    dimensions: ' Cerculaire 60 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2024,
  },
  {
    id: '25',
    title: 'les chemins du pardon',
    artist: 'Souad Aziz',
    price: 4700,
    image: '/images/artworks/lescheminsdupardon.jpg',
    cloudinaryId: 'lescheminsdupardon',
    images: [
      '/images/artworks/lescheminsdupardon.jpg',
      '/images/artworks/lescheminsdupardon-2.jpg',
      '/images/artworks/lescheminsdupardon-3.jpg'
    ],
    cloudinaryIds: ['lescheminsdupardon', 'lescheminsdupardon-2', 'lescheminsdupardon-3'],
    description: 'Ce tableau se distingue par sa composition de couleurs douce et harmonieuse mais mouvementée, et qui apporte un message spirituel profond.',
    category: 'Abstrait',
    dimensions: ' 150 x 90 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '26',
    title: 'Ara bleu',
    artist: 'Souad Aziz',
    price: 3300,
    image: '/images/artworks/arableu.jpg',
    cloudinaryId: 'arableu',
    images: [
      '/images/artworks/arableu.jpg',
      '/images/artworks/arableu-2.jpg',
      '/images/artworks/arableu-3.jpg'
    ],
    cloudinaryIds: ['arableu', 'arableu-2', 'arableu-3'],
    description: 'Ce tableau dont  composition de couleurs est spéciale et mouvementée, est inspirée de la beauté naturelle de l\'ara bleu',
    category: 'Abstrait',
    dimensions: ' 120 x 80 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '27',
    title: 'Genèse',
    artist: 'Souad Aziz',
    price: 3100,
    image: '/images/artworks/genesis.jpg',
    cloudinaryId: 'genesis',
    images: [
      '/images/artworks/genesis.jpg',
      '/images/artworks/genesis-2.jpg',
      '/images/artworks/genesis-3.jpg'
    ],
    cloudinaryIds: ['genesis', 'genesis-2', 'genesis-3'],
    description: 'Ce tableau appelle à la méditation, par ses couleurs, sa composition et sa calligraphie, on se connecte au Créateur. Il porte un message spirituel très profond',
    category: 'Abstrait',
    dimensions: ' 120 x 70 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '28',
    title: 'Hope',
    artist: 'Souad Aziz',
    price: 4000,
    image: '/images/artworks/hope.jpg',
    cloudinaryId: 'hope',
    images: [
      '/images/artworks/hope.jpg',
      '/images/artworks/hope-2.jpg'
    ],
    cloudinaryIds: ['hope', 'hope-2'],
    description: 'Comme désigné le titre, même dans les plus difficile conditions, il ya toujours l\'espoir, la vie ..!',
    category: 'Abstrait',
    dimensions: ' 150 x 90 cm',
    technique: 'Technique mixte sur toile',
    available: true,
    year: 2022,
  },
  {
    id: '29',
    title: 'Golden Saphire',
    artist: 'Souad Aziz',
    price: 3360,
    image: '/images/artworks/goldensaphire.jpg',
    cloudinaryId: 'goldensaphire',
    images: [
      '/images/artworks/goldensaphire.jpg',
      '/images/artworks/goldensaphire-2.jpg'
    ],
    cloudinaryIds: ['goldensaphire', 'goldensaphire-2'],
    description: 'Très jolie composition inspirée des pierres précieuses, les couleurs nous emmènent avec leurs mouvements entre simplicité et complexité',
    category: 'Abstrait',
    dimensions: ' 120 x 80 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '30',
    title: 'La danse',
    artist: 'Souad Aziz',
    price: 4700,
    image: '/images/artworks/ladance.jpg',
    cloudinaryId: 'ladance',
    images: [
      '/images/artworks/ladance.jpg',
      '/images/artworks/ladance-2.jpg'
    ],
    cloudinaryIds: ['ladance', 'ladance-2'],
    description: 'Ce tableau capture un moment de beauté fugace, nous invitant à réfléchir non seulement à la splendeur du mouvement, mais aussi à la force, à la passion et à l\'âme qui se cachent derrière chaque pas de danse.',
    category: 'Figuratif contemporain',
    dimensions: ' 150 x 90 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2022,
  },
  {
    id: '31',
    title: 'Ambre',
    artist: 'Souad Aziz',
    price: 4900,
    image: '/images/artworks/ambre.jpg',
    cloudinaryId: 'ambre',
    images: [
      '/images/artworks/ambre.jpg',
      '/images/artworks/ambre-2.jpg',
      '/images/artworks/ambre-3.jpg'
    ],
    cloudinaryIds: ['ambre', 'ambre-2', 'ambre-3'],
    description: 'Ce tableau est le quatrième de la série « WOOD FRAGRANCE », le mélange de couleur et leur mouvement nous emmène dans un voyage boisé.',
    category: 'Abstrait',
    dimensions: ' 140 x 100 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2025,
  },
  {
    id: '32',
    title: 'Echo',
    artist: 'Souad Aziz',
    price: 2800,
    image: '/images/artworks/echo.jpg',
    cloudinaryId: 'echo',
    images: [
      '/images/artworks/echo.jpg',
      '/images/artworks/echo-2.jpg',
      '/images/artworks/echo-3.jpg',
      '/images/artworks/echo-4.jpg'
    ],
    cloudinaryIds: ['echo', 'echo-2', 'echo-3', 'echo-4'],
    description: 'Ce tableau évoque l\'échange profond, l\'effet miroir et les mouvements quotidiens entre les composantes de la vie.',
    category: 'Abstrait',
    dimensions: ' Diptyque 70 x 50 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2025,
  },
  {
    id: '33',
    title: 'Révélation',
    artist: 'Souad Aziz',
    price: 2800,
    image: '/images/artworks/revelation.jpg',
    cloudinaryId: 'revelation',
    images: [
      '/images/artworks/revelation.jpg',
      '/images/artworks/revelation-2.jpg',
      '/images/artworks/revelation-3.jpg',
      '/images/artworks/revelation-4.jpg'
    ],
    cloudinaryIds: ['revelation', 'revelation-2', 'revelation-3', 'revelation-4'],
    description: 'Ce tableau mouvementé, par les couleurs et les textures montre la beauté dans la complexité de la vie',
    category: 'Abstrait',
    dimensions: ' Diptyque 70 x 50 cm',
    technique: 'Technique mixte sur toile',
    available: false,
    year: 2025,
  }
];

export const categories = [
  'Tous',
  'Abstrait',
  'Paysage',
  'Nature',
  'Urbain',
  'Portrait',
  'Figuratif contemporain',
];

export const heroImages = [
  {
    image: '/images/hero.jpg',
    title: 'Art & Passion',
    description: 'Explorez notre Galerie et plongez dans une collection unique de Tableaux originaux signés Souad AZIZ. \nVous avez une vision particulière ? Commandez votre œuvre Sur-Mesure pour une création parfaitement adaptée à votre espace',
    primaryButton: {
      text: 'Découvrir la Collection',
      link: '/boutique'
    },
    secondaryButton: {
      text: 'En Savoir Plus',
      link: '/a-propos'
    }
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Art & Passion',
    description: 'Développez votre talent créatif en rejoignant nos Workshops spécialisés',
    primaryButton: {
      text: 'Voir les Œuvres',
      link: '/boutique'
    },
    secondaryButton: {
      text: 'En Savoir Plus',
      link: '/workshop'
    }
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Art & Passion',
    description: 'Pour une expérience artistique à domicile, ou pour une idée cadeau originale: \nVisitez le Shop et procurez-vous l\'Artbox, l\'outil complet pour donner vie à vos propres inspirations',
    primaryButton: {
      text: 'Explorer la Galerie',
      link: '/boutique'
    },
    secondaryButton: {
      text: 'En Savoir Plus',
      link: '/shop'
    }
  },
];

export const shopProducts: ShopProduct[] = [
  {
    id: 'p1',
    name: 'Art Box Fun',
    price: 119,
    image: '/images/shop/Fun.jpg',
    images: [
      '/images/shop/Fun.jpg',
      '/images/shop/Fun-2.jpg',
      '/images/shop/Fun-3.jpg',
      '/images/shop/Fun-4.jpg',
      '/images/shop/Fun-5.jpg',
      '/images/shop/Fun-6.jpg',
      '/images/shop/Fun-7.jpg',
      '/images/shop/Fun-8.jpg'
    ],
    cloudinaryId: 'Fun.jpg',
    cloudinaryIds: [
      'Fun.jpg',
      'Fun-2.jpg',
      'Fun-3.jpg',
      'Fun-4.jpg',
      'Fun-5.jpg',
      'Fun-6.jpg',
      'Fun-7.jpg',
      'Fun-8.jpg'
    ],
    description: 'C\'est ici que l\'aventure commence ! L\'Art Box Fun est la porte d\'entrée de notre Lab Création, conçue pour un maximum de plaisir.<br>Ce kit est parfait pour découvrir la magie de la couleur. Ouvrez la box et trouvez une collection de figurines en plâtre prêtes à être transformées en œuvres d\'art colorées, accompagnées de tout le Kit Peinture essentiel. <br><br> <strong> Option cadeau disponible </strong> : Ajoutez l\'emballage cadeau à votre commande pour offrir ce moment de créativité et de fun !',
    forWhom: 'Les enfants, les mini-créateurs et les esprits qui veulent s\'amuser.',
    content: [
      'Figurines en plâtre',
      'Pots de peinture acrylique (6 couleurs)',
      '2 Pinceaux',
      '1 Palette',
      '1 Guide de mélange des couleurs',
      '1 Coloriage',
      'Gift: Surprise offerte'
    ],
    category: 'Art Box',
    stock: 15,
    brand: ' ',
    itemType: 'product'
  },
  {
    id: 'p2',
    name: 'Art Box Starter',
    price: 149,
    image: '/images/shop/Starter.jpg',
    images: [
      '/images/shop/Starter.jpg',
      '/images/shop/Starter-2.jpg',
      '/images/shop/Starter-3.jpg'
    ],
    cloudinaryId: 'Starter.jpg',
    cloudinaryIds: [
      'Starter.jpg',
      'Starter-2.jpg',
      'Starter-3.jpg'
    ],
    description: 'Prêt à monter votre premier atelier ? L\'Art Box Starter est notre formule test pour vous lancer dans la peinture sur toile ! <br>Ce kit tout-en-un contient une mini-toile sur chevalet (parfaite pour commencer sans pression), et bien sûr, un Kit Peinture complet et de qualité pour vos premières manipulations. Nous vous donnons tous les outils pour passer du simple rêve à la réalisation d\'une œuvre dont vous serez fier. <br><br> <strong> Option cadeau disponible </strong> : un cadeau inspirant ! Pensez à l\'emballage cadeau pour surprendre un proche qui rêve de se mettre à la peinture.',
    forWhom: 'Les débutants, les curieux et ceux qui veulent s\'initier sérieusement à la peinture sur toile.',
    content: [
      '1 Canevas (10 x 10 cm) avec Chevalet',
      'Pots de peinture acrylique (6 couleurs)',
      '2 Pinceaux',
      '1 Palette',
      '1 Guide de mélange des couleurs',
      'Cartes d\'inspirations',
      'Gift: Surprise offerte'
    ],
    category: 'Art Box',
    stock: 8,
    brand: ' ',
    itemType: 'product'
  },
  {
    id: 'p3',
    name: 'Art Box Pro ',
    price: 219,
    image: '/images/shop/ArtPro.jpg',
    images: [
      '/images/shop/ArtPro.jpg',
      '/images/shop/ArtPro-2.jpg',
      '/images/shop/ArtPro-3.jpg',
      '/images/shop/ArtPro-4.jpg'
      
    ],
    cloudinaryId: 'ArtPro',
    cloudinaryIds: [
      'ArtPro',
      'ArtPro-2',
      'ArtPro-3',
      'ArtPro-4'
    ],
    description: 'Passez au niveau supérieur dans Le Lab Création ! L\'Art Box Pro est destinée à ceux qui sont prêts à affiner leur technique et à expérimenter avec des outils plus spécialisés. <br>Dans cette boîte, vous trouverez du matériel de peinture de qualité professionnelle (meilleurs pigments, pinceaux plus précis, supports plus grands…) . Cette Art Box vous ouvre les portes de l\'expérimentation avancée. <br><br> <strong> Option cadeau disponible </strong> : Le cadeau parfait pour l\'artiste passionné ! Pensez à l\'emballage cadeau lors de la commande.',
    forWhom: 'Les artistes en herbe, les créateurs passionnés et ceux qui recherchent un matériel de haute qualité.',
    content: [
      '2 Toiles professionnelles Le Franc Bourgeois (20 x 20 cm)',
      'Pots de peinture Acrylique Mont Martre (12 couleurs)',
      '2 Pinceaux professionnels',
      '1 Palette',
      '1 Guide de mélange des couleurs',
      'Gift: Surprise offerte'
    ],
    category: 'Art Box',
    stock: 14,
    brand: ' ',
    itemType: 'product'
  }
];

export const shopCategories = [
  'Tous',
  'Pinceaux',
  'Toiles',
  'Peintures',
  'Médiums',
  'Accessoires',
  'Chevalets',
  'Vernis',
  'Papiers'
];

export const workshopHeroImages = [
  {
    image: '/images/workshop/workshop.jpg',
    alt: 'Formation peinture en ligne'
  },
  {
    image: '/images/workshop/workshop-2.jpg',
    alt: 'Atelier créatif peinture'
  },
  {
    image: '/images/workshop/workshop-3.jpg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-4.jpeg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-5.jpg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-6.jpg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-7.jpg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-8.jpg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-9.jpeg',
    alt: 'Cours de peinture intuitive'
  },
  {
    image: '/images/workshop/workshop-10.jpeg',
    alt: 'Cours de peinture intuitive'
  }

];
