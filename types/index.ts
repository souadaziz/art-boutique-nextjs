export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string; // Image principale pour la galerie (locale ou URL complète)
  images: string[]; // Toutes les images (1-5) pour le carousel
  cloudinaryId?: string; // ID Cloudinary pour l'image principale (optionnel)
  cloudinaryIds?: string[]; // IDs Cloudinary pour toutes les images (optionnel)
  description: string;
  category: string;
  dimensions: string;
  technique: string;
  available: boolean;
  year: number;
  itemType?: 'artwork'; // Discriminator
}

export type CartableItem = Artwork | ShopProduct;

export interface CartItem {
  item: CartableItem;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartableItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

export interface ShopProduct {
  id: string;
  name: string;
  price: number;
  image: string; // Image principale pour la galerie (locale ou URL complète)
  images?: string[]; // Toutes les images pour le carousel (optionnel)
  cloudinaryId?: string; // ID Cloudinary pour l'image principale (optionnel)
  cloudinaryIds?: string[]; // IDs Cloudinary pour toutes les images (optionnel)
  description: string;
  forWhom?: string; // Pour qui ce produit est destiné
  content?: string[]; // Contenu de la box (liste des éléments inclus)
  category: string;
  stock: number;
  brand?: string;
  itemType: 'product'; // Discriminator
}
