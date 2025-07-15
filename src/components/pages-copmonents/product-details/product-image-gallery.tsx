'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/types/header';

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
  discount?: number;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  images, 
  productName, 
  discount 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainImage = images[selectedImageIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {discount}%
          </span>
        </div>
      )}

      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={mainImage?.url || '/placeholder-product.jpg'}
          alt={mainImage?.alt || productName}
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
              index === selectedImageIndex
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={80}
              height={80}
              className="w-full h-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;

