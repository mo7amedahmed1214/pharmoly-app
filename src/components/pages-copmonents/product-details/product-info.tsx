'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '@/types/header';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="space-y-4">
      {/* Category Badge */}
      <div className="inline-block">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded uppercase tracking-wide">
          {product.category}
        </span>
      </div>

      {/* Product Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        {product.name}
      </h1>

      {/* Rating and Reviews */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating}
        </span>
        <span className="text-sm text-gray-400">
          SKU: {product.sku}
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-green-600">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="text-lg text-gray-500 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${
          product.inStock ? 'bg-green-500' : 'bg-red-500'
        }`} />
        <span className={`text-sm font-medium ${
          product.inStock ? 'text-green-600' : 'text-red-600'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Product Description */}
      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
};

export default ProductInfo;

