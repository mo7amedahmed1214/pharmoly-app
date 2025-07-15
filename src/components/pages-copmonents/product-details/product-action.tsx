'use client';

import React, { useState } from 'react';
import { Minus, Plus, Heart, RotateCcw } from 'lucide-react';

interface ProductActionsProps {
  inStock: boolean;
  onAddToCart?: (quantity: number) => void;
  onAddToWishlist?: () => void;
  onCompare?: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  inStock,
  onAddToCart,
  onAddToWishlist,
  onCompare
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (onAddToCart && inStock) {
      onAddToCart(quantity);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
            inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to cart' : 'Out of Stock'}
        </button>

        {/* Wishlist Button */}
        <button
          onClick={onAddToWishlist}
          className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          title="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>

        {/* Compare Button */}
        <button
          onClick={onCompare}
          className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          title="Compare"
        >
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="flex items-center space-x-6 text-sm">
        <button
          onClick={onAddToWishlist}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <Heart className="w-4 h-4" />
          <span>Add to wishlist</span>
        </button>
        
        <button
          onClick={onCompare}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Compare</span>
        </button>
      </div>
    </div>
  );
};

export default ProductActions;

