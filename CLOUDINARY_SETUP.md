# Configuration Cloudinary pour SouadAzizArt

## Configuration requise

### 1. Variables d'environnement

Ajoutez les variables suivantes dans votre fichier `.env.local` :

```env
# Configuration Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre-cloud-name
CLOUDINARY_API_KEY=votre-api-key
CLOUDINARY_API_SECRET=votre-api-secret
```

### 2. Obtenir vos identifiants Cloudinary

1. Créez un compte sur [Cloudinary](https://cloudinary.com/)
2. Dans votre dashboard Cloudinary, récupérez :
   - **Cloud Name** : visible dans l'URL de votre dashboard
   - **API Key** : dans la section "API Keys"
   - **API Secret** : dans la section "API Keys"

### 3. Upload de vos images

#### Option 1: Upload via l'interface Cloudinary
1. Connectez-vous à votre dashboard Cloudinary
2. Allez dans "Media Library"
3. Créez les dossiers suivants :
   - `artworks/` pour les œuvres d'art
   - `logo/` pour les logos
   - `hero/` pour les images du carousel principal

#### Option 2: Upload programmatique
Utilisez le script d'upload automatique (à créer) pour transférer toutes vos images locales vers Cloudinary.

### 4. Structure des dossiers Cloudinary

```
votre-cloud-name/
├── artworks/
│   ├── EaudAzur
│   ├── EaudAzur-2
│   ├── SecretGarden
│   └── ...
├── logo/
│   └── LOG
└── hero/
    ├── hero
    ├── hero-2
    └── hero-3
```

## Fonctionnalités implémentées

### Composant CloudinaryImage
- Optimisation automatique des images (format, qualité)
- Redimensionnement intelligent
- Fallback vers les images locales si Cloudinary n'est pas configuré
- Loading states et gestion d'erreurs

### Utilitaires Cloudinary
- `getCloudinaryUrl()` : génère des URLs optimisées
- `getOptimizedImageUrl()` : convertit les chemins locaux en URLs Cloudinary
- `getCloudinaryPublicId()` : convertit les chemins locaux en IDs publics

### Composants mis à jour
- ✅ `ArtworkCard.tsx`
- ✅ `HeroCarousel.tsx` 
- ✅ `ImageCarousel.tsx`
- ✅ `Cart.tsx`
- ✅ `Header.tsx`

## Avantages de cette implémentation

1. **Performance** : Images optimisées automatiquement
2. **Responsive** : Différentes tailles selon l'appareil
3. **SEO** : Chargement plus rapide des images
4. **Flexibilité** : Fallback vers images locales
5. **Maintenance** : Gestion centralisée des images

## Test de la configuration

1. Remplacez les valeurs `your-cloud-name`, `your-api-key`, etc. par vos vraies valeurs
2. Uploadez quelques images de test sur Cloudinary
3. Redémarrez votre serveur de développement
4. Vérifiez que les images se chargent depuis Cloudinary (URLs commençant par `res.cloudinary.com`)

## Dépannage

### Images ne se chargent pas
- Vérifiez que `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` est correctement défini
- Assurez-vous que les images existent sur Cloudinary avec les bons noms
- Vérifiez la console pour les erreurs de chargement

### Fallback vers images locales
- Normal si Cloudinary n'est pas configuré
- Les images locales dans `/public/images/` seront utilisées

### Erreurs de build
- Redémarrez le serveur après modification des variables d'environnement
- Vérifiez que tous les imports sont corrects
