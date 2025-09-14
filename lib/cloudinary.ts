// Utilitaire pour générer les URLs Cloudinary optimisées pour next/image

/**
 * Génère une URL Cloudinary complète à partir d'un publicId
 * @param publicId - L'identifiant public de l'image sur Cloudinary
 * @param transformations - Transformations optionnelles (par défaut: aucune pour préserver la qualité originale)
 * @returns URL complète de l'image Cloudinary
 */
export function getCloudinaryUrl(
  publicId: string,
  transformations?: string
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName) {
    console.warn('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME not configured');
    return '';
  }

  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }
  
  // Sans transformations pour préserver la qualité originale
  return `${baseUrl}/${publicId}`;
}

/**
 * Génère une URL Cloudinary avec des transformations spécifiques
 * @param publicId - L'identifiant public de l'image
 * @param width - Largeur souhaitée
 * @param height - Hauteur souhaitée (optionnelle)
 * @param quality - Qualité de l'image (par défaut: auto)
 * @returns URL Cloudinary transformée
 */
export function getOptimizedCloudinaryUrl(
  publicId: string,
  width: number,
  height?: number,
  quality: string = 'auto'
): string {
  const transformations = [];
  
  if (width) {
    transformations.push(`w_${width}`);
  }
  
  if (height) {
    transformations.push(`h_${height}`);
  }
  
  transformations.push(`q_${quality}`, 'f_auto');
  
  return getCloudinaryUrl(publicId, transformations.join(','));
}

/**
 * Génère une URL Cloudinary optimisée pour les performances sans affecter la qualité visuelle
 * @param publicId - L'identifiant public de l'image
 * @param width - Largeur d'affichage
 * @param height - Hauteur d'affichage
 * @returns URL Cloudinary avec optimisations invisibles
 */
export function getPerformanceOptimizedUrl(
  publicId: string,
  width: number,
  height?: number
): string {
  const transformations = [];
  
  // Redimensionnement exact pour éviter le téléchargement d'images trop grandes
  if (width) {
    transformations.push(`w_${width}`);
  }
  
  if (height) {
    transformations.push(`h_${height}`);
  }
  
  // Optimisations invisibles pour les performances :
  // - f_auto : Format automatique (WebP pour navigateurs compatibles, sinon JPEG)
  // - q_auto:good : Qualité automatique optimisée (préserve la qualité visuelle)
  // - dpr_auto : Adaptation automatique à la densité de pixels de l'écran
  transformations.push('f_auto', 'q_auto:good', 'dpr_auto');
  
  return getCloudinaryUrl(publicId, transformations.join(','));
}

/**
 * Vérifie si Cloudinary est configuré
 * @returns true si Cloudinary est configuré
 */
export function isCloudinaryConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
}