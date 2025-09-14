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
}

export interface CartItem {
  artwork: Artwork;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (artworkId: string) => void;
  updateQuantity: (artworkId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
