export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  description: string;
  category: string;
  dimensions: string;
  technique: string;
  available: boolean;
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
