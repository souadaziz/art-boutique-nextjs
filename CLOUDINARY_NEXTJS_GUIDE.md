# Guide d'utilisation de next/image avec Cloudinary

Ce guide explique comment utiliser le composant `next/image` avec des images hébergées sur Cloudinary dans votre application art-boutique-nextjs.

## Configuration initiale

### 1. Variables d'environnement

Ajoutez vos informations Cloudinary dans `.env.local` :

```env
# Configuration Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

### 2. Configuration Next.js

Le fichier `next.config.js` est déjà configuré pour autoriser les domaines Cloudinary :

```javascript
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
```

## Utilisation

### Option 1 : Utilisation directe de next/image avec les utilitaires

```tsx
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/cloudinary';

function MonComposant() {
  const publicId = "mon-image-id"; // L'ID de votre image sur Cloudinary
  
  return (
    <Image
      src={getCloudinaryUrl(publicId)}
      alt="Description de l'image"
      width={400}
      height={300}
      className="rounded-lg"
    />
  );
}
```

### Option 2 : Utilisation du composant CloudinaryImage

```tsx
import CloudinaryImage from '@/components/CloudinaryImage';

function MonComposant() {
  return (
    <CloudinaryImage
      publicId="mon-image-id"
      alt="Description de l'image"
      width={400}
      height={300}
      className="rounded-lg"
      fallbackSrc="/images/fallback.jpg" // Image de secours si Cloudinary n'est pas disponible
    />
  );
}
```

### Option 3 : Avec transformations Cloudinary

```tsx
import Image from 'next/image';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

function MonComposant() {
  const publicId = "mon-image-id";
  
  return (
    <Image
      src={getOptimizedCloudinaryUrl(publicId, 400, 300, 'auto')}
      alt="Description de l'image"
      width={400}
      height={300}
      className="rounded-lg"
    />
  );
}
```

## Exemples pratiques

### 1. Image responsive avec sizes

```tsx
<Image
  src={getCloudinaryUrl("artwork-123")}
  alt="Œuvre d'art"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-auto"
/>
```

### 2. Image avec priority (pour les images above-the-fold)

```tsx
<Image
  src={getCloudinaryUrl("hero-image")}
  alt="Image hero"
  width={1200}
  height={800}
  priority
  className="w-full h-auto"
/>
```

### 3. Image avec fill (pour les conteneurs avec position relative)

```tsx
<div className="relative w-full h-64">
  <Image
    src={getCloudinaryUrl("background-image")}
    alt="Arrière-plan"
    fill
    className="object-cover"
  />
</div>
```

### 4. Galerie d'images avec Cloudinary

```tsx
function Galerie({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="relative aspect-square">
          <Image
            src={artwork.cloudinaryId 
              ? getCloudinaryUrl(artwork.cloudinaryId)
              : artwork.image
            }
            alt={artwork.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
```

## Fonctions utilitaires disponibles

### `getCloudinaryUrl(publicId, transformations?)`

Génère une URL Cloudinary basique :

```tsx
// Sans transformations (qualité originale)
const url = getCloudinaryUrl("mon-image");
// Résultat : https://res.cloudinary.com/votre-cloud/image/upload/mon-image

// Avec transformations personnalisées
const url = getCloudinaryUrl("mon-image", "w_400,h_300,c_fill");
// Résultat : https://res.cloudinary.com/votre-cloud/image/upload/w_400,h_300,c_fill/mon-image
```

### `getOptimizedCloudinaryUrl(publicId, width, height?, quality?)`

Génère une URL Cloudinary optimisée :

```tsx
const url = getOptimizedCloudinaryUrl("mon-image", 400, 300, "auto");
// Résultat : https://res.cloudinary.com/votre-cloud/image/upload/w_400,h_300,q_auto,f_auto/mon-image
```

### `isCloudinaryConfigured()`

Vérifie si Cloudinary est configuré :

```tsx
if (isCloudinaryConfigured()) {
  // Utiliser Cloudinary
} else {
  // Utiliser les images locales
}
```

## Gestion des erreurs et fallbacks

Le système inclut une gestion automatique des fallbacks :

1. Si Cloudinary n'est pas configuré → utilise les images locales
2. Si l'URL Cloudinary ne peut pas être générée → utilise l'image de fallback
3. Si aucune image de fallback n'est fournie → essaie de trouver l'image dans `/images/artworks/`

## Bonnes pratiques

1. **Utilisez `priority`** pour les images importantes (hero, above-the-fold)
2. **Définissez `sizes`** pour les images responsives
3. **Utilisez `fill`** avec des conteneurs de taille fixe
4. **Préservez la qualité** en évitant les transformations excessives
5. **Testez les fallbacks** en désactivant temporairement Cloudinary

## Migration des images existantes

Pour migrer vos images existantes vers Cloudinary :

1. Uploadez vos images sur Cloudinary
2. Notez les `publicId` de chaque image
3. Mettez à jour vos données avec les `cloudinaryId`
4. Les images locales resteront comme fallback

Exemple de mise à jour des données :

```typescript
const artwork: Artwork = {
  id: "1",
  title: "Mon œuvre",
  image: "/images/artworks/oeuvre1.jpg", // Fallback
  cloudinaryId: "artworks/oeuvre1", // ID Cloudinary
  // ... autres propriétés
};
```
