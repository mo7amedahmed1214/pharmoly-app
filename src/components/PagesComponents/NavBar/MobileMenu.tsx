'use client';

import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { NavigationItem } from '@/types/header';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    item.isHighlighted
                      ? item.highlightColor === 'blue'
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
              Order Tracking
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

