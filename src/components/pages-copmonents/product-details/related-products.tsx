'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { RelatedProduct } from '@/types/header';

interface RelatedProductsProps {
  products: RelatedProduct[];
  title?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  products, 
  title = "Related products" 
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
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

  const calculateDiscount = (originalPrice: number, currentPrice: number) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            {/* Discount Badge */}
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {calculateDiscount(product.originalPrice, product.price)}%
                </span>
              </div>
            )}

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>

            {/* Product Image */}
            <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-xs text-gray-500 ml-1">
                  {product.reviewCount}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                <Link href={`/product/${product.id}`} className="hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </Link>
              </h3>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg font-bold text-green-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={!product.inStock}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

