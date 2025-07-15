'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbItem } from '@/types/header';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, currentPage }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link 
            href={item.href}
            className="hover:text-gray-900 transition-colors duration-200"
          >
            {item.label}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </React.Fragment>
      ))}
      <span className="text-gray-900 font-medium">{currentPage}</span>
    </nav>
  );
};

export default Breadcrumb;

