'use client';

import React from 'react';
import { Heart, RotateCcw, User, ShoppingCart, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

interface ActionButtonsProps {
  cartTotal: string;
  cartCount: number;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ cartTotal, cartCount }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Wishlist Button */}
      <div className="flex items-center  justify-center border border-red-500 hover:border-red-400 rounded-full">
        <Link
          href="/wishlist"
          className="p-2 text-red-500 hover:text-red-400 transition-colors duration-200">
          <Heart className="w-4 h-4" />
        </Link>
      </div>
      {/* Compare Button */}
      <div className="flex items-center  justify-center border border-blue-500 hover:border-blue-400 rounded-full">
        <Link
          href="/compare"
          className="p-2 text-blue-500 hover:text-blue-400 transition-colors duration-200">
          <RefreshCcw className="w-4 h-4" />
        </Link>
      </div>


      {/* Account Button */}
      <Link
        href="/account"
        className="flex items-center space-x-2 text-gray-700">
        <div className="p-2 flex items-center  justify-center border border-blue-500 hover:border-blue-400 rounded-full">
          <User className="w-4 h-4 text-blue-500 hover:text-blue-400" />
        </div>
        <div className="hidden md:block">
          <div className="text-sm font-semibold">Sign In</div>
          <div className="text-[10px] text-gray-500">Account</div>
        </div>
      </Link>

      {/* Cart Button */}
      <Link
        href="/cart"
        className="flex items-center space-x-2 text-gray-700">
        <div className="relative">
          <div className="p-2 flex items-center  justify-center  bg-blue-100 hover:bg-blue-50 rounded-full transition-colors duration-200">
            <ShoppingCart className="w-4 h-4 text-blue-500 hover:text-blue-400" />

          </div>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <div className="hidden md:block">
          <div className="text-sm font-semibold">{cartTotal}</div>
          <div className="text-[10px] text-gray-500">Cart Total</div>
        </div>
      </Link>
    </div>
  );
};

export default ActionButtons;

