'use client';

import React from 'react';
import { Truck, Clock, Shield } from 'lucide-react';
import { ProductFeature } from '@/types/header';

interface ProductFeaturesProps {
  features?: ProductFeature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  // Default features if none provided
  const defaultFeatures: ProductFeature[] = [
    {
      icon: 'truck',
      title: 'Free Shipping & Returns',
      description: 'on this item'
    },
    {
      icon: 'clock',
      title: 'Delivery within',
      description: '3-5 working days'
    },
    {
      icon: 'shield',
      title: 'Money Back',
      description: 'Guarantee'
    }
  ];

  const displayFeatures = features || defaultFeatures;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck':
        return <Truck className="w-5 h-5 text-gray-600" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-gray-600" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-gray-600" />;
      default:
        return <div className="w-5 h-5 bg-gray-300 rounded" />;
    }
  };

  return (
    <div className="space-y-4 py-4 border-t border-gray-200">
      {displayFeatures.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {getIcon(feature.icon)}
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {feature.title}
            </div>
            <div className="text-sm text-gray-600">
              {feature.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;

