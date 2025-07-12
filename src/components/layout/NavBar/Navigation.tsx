'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, ChevronDown, LocationEdit } from 'lucide-react';
import { NavigationItem } from '@/types/header';

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Main Navigation */}
          <div className="flex items-center space-x-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 text-xs font-bold transition-colors duration-200 ${
                    item.isHighlighted
                      ? item.highlightColor === 'blue'
                        ? 'text-blue-600 hover:text-blue-700'
                        : 'text-orange-600 hover:text-orange-700'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && hoveredIndex === index && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded-md z-50">
                    <ul className="py-2 text-sm text-gray-700">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side navigation items */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Box className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold">Order Tracking</span>
            </div>

            <div className="flex items-center space-x-1">
              <LocationEdit className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold">FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
