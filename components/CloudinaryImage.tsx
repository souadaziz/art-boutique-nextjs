import Image from 'next/image';
import { useState } from 'react';
import { getCloudinaryUrl, isCloudinaryConfigured } from '@/lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  fallbackSrc?: string;
  transformations?: string;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  fallbackSrc,
  transformations,
}: CloudinaryImageProps) {
  const [hasError, setHasError] = useState(false);

  // Si pas de publicId (ou chaîne vide) ou Cloudinary non configuré, utiliser fallback
  if (!publicId || publicId.trim() === '' || !isCloudinaryConfigured()) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          fill={fill}
          sizes={sizes}
        />
      );
    }
    
    // Essayer de trouver une image locale correspondante
    const localSrc = publicId ? `/images/artworks/${publicId}` : '/images/placeholder.jpg';
    return (
      <Image
        src={localSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
      />
    );
  }

  // Si l'image Cloudinary a échoué, utiliser le fallback
  if (hasError) {
    const localSrc = fallbackSrc || `/images/artworks/${publicId}`;
    return (
      <Image
        src={localSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
      />
    );
  }

  // Générer l'URL Cloudinary sans optimisations automatiques pour préserver la qualité
  const cloudinaryUrl = getCloudinaryUrl(publicId, transformations);

  if (!cloudinaryUrl) {
    // Fallback vers image locale si l'URL Cloudinary ne peut pas être générée
    const localSrc = fallbackSrc || `/images/artworks/${publicId}`;
    return (
      <Image
        src={localSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={cloudinaryUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      fill={fill}
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  );
}