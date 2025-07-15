'use client';

import { ProductTabContent } from '@/types/header';
import React, { useState } from 'react';

interface ProductTabsProps {
  description: string;
  reviewCount: number;
  customTabs?: ProductTabContent[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ 
  description, 
  reviewCount, 
  customTabs = [] 
}) => {
  const [activeTab, setActiveTab] = useState('description');

  const defaultTabs = [
    {
      id: 'description',
      label: 'Description',
      content: description
    },
    {
      id: 'reviews',
      label: `Reviews (${reviewCount})`,
      content: 'Reviews content would go here. This is a placeholder for the reviews section.'
    }
  ];

  const tabs = [...defaultTabs, ...customTabs];

  return (
    <div className="mt-12">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.id === 'description' ? (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tab.content}
                </p>
              </div>
            ) : tab.id === 'reviews' ? (
              <div className="space-y-6">
                <div className="text-center py-12 text-gray-500">
                  <p>No reviews yet. Be the first to review this product!</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Write a Review
                  </button>
                </div>
              </div>
            ) : (
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: tab.content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;

