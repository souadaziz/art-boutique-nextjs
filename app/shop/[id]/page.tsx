'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Share2, Minus, Plus, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { shopProducts } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import ImageCarousel from '@/components/ImageCarousel';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const product = shopProducts.find(prod => prod.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Link
            href="/shop"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = shopProducts
    .filter(prod => prod.category === product.category && prod.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setQuantity(1);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const isInStock = product.stock > 0;
  const isLowStock = product.stock > 0 && product.stock < 5;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Carousel */}
          <ImageCarousel 
            images={product.images || [product.image]}
            cloudinaryIds={product.cloudinaryIds}
            title={product.name}
          />

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              {/* Category - Masqué temporairement */}
              {/* <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                {product.category}
              </span> */}
              {/* Product Brand - Masqué temporairement */}
              {/* {product.brand && (
                <span className="text-gray-400 text-sm ml-2">• {product.brand}</span>
              )} */}
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className={`text-2xl font-semibold mb-4 ${isInStock ? 'text-gray-900' : 'text-gray-500'}`}>
                {product.price} MAD
              </p>
              {product.forWhom && (
                <div className="mt-4 bg-primary-50 border border-primary-100 rounded-lg p-4">
                  <p className="text-sm font-semibold text-primary-900 mb-1">Pour qui ?</p>
                  <p className="text-primary-700">{product.forWhom}</p>
                </div>
              )}
              
              {/* Stock Status */}
              {!isInStock && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-800 font-medium">Ce produit est actuellement en rupture de stock.</p>
                  <p className="text-red-600 text-sm mt-1">Contactez-nous pour connaître la disponibilité.</p>
                </div>
              )}
              {isLowStock && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 font-medium">⚠️ Plus que {product.stock} en stock - Commandez vite !</p>
                </div>
              )}
            </div>

            <div className="mb-8">
               

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              
            </div>

            {/* Contenu de la box - Collapsible */}
            {product.content && product.content.length > 0 && (
              <div className="mb-8 border border-gray-200 rounded-lg">
                <button
                  onClick={() => setIsContentOpen(!isContentOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary-600" />
                    <span className="text-lg font-semibold text-gray-900">Contenu de la box</span>
                  </div>
                  {isContentOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {isContentOpen && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {product.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Product Details - Masqué temporairement */}
            {/* <div className="mb-8 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Détails</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Catégorie:</span>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <span className="text-gray-500">Stock disponible:</span>
                  <p className="font-medium">{product.stock} unité{product.stock > 1 ? 's' : ''}</p>
                </div>
                {product.brand && (
                  <div>
                    <span className="text-gray-500">Marque:</span>
                    <p className="font-medium">{product.brand}</p>
                  </div>
                )}
                <div>
                  <span className="text-gray-500">Référence:</span>
                  <p className="font-medium">{product.id.toUpperCase()}</p>
                </div>
              </div>
            </div> */}

            {/* Actions */}
            {isInStock ? (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-gray-700">Quantité:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-gray-500 hover:text-gray-700"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 text-gray-500 hover:text-gray-700"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  {quantity >= product.stock && (
                    <span className="text-sm text-orange-600">Stock maximum atteint</span>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-md border transition-colors duration-200 ${
                      isWishlisted
                        ? 'bg-red-50 border-red-200 text-red-600'
                        : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Package className="h-5 w-5" />
                    Nous contacter
                  </Link>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-md border transition-colors duration-200 ${
                      isWishlisted
                        ? 'bg-red-50 border-red-200 text-red-600'
                        : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>✓ Livraison partout au Maroc</p>
              <p>✓ Matériel de qualité</p>
            
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Produits Similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
