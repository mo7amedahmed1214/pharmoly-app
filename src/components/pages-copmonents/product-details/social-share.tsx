'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface SocialShareProps {
  productName: string;
  productUrl?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ productName, productUrl }) => {
  const currentUrl = productUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `Check out this product: ${productName}`;

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: 'hover:text-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
      color: 'hover:text-green-600'
    }
  ];

  const handleShare = (url: string, platform: string) => {
    if (platform === 'Instagram') {
      // Instagram doesn't support direct sharing via URL
      alert('Please share manually on Instagram');
      return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="py-4 border-t border-gray-200">
      <h3 className="text-sm font-medium text-gray-900 mb-3">
        Share this product:
      </h3>
      <div className="flex items-center space-x-3">
        {socialPlatforms.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <button
              key={platform.name}
              onClick={() => handleShare(platform.url, platform.name)}
              className={`p-2 text-gray-500 ${platform.color} transition-colors duration-200 hover:bg-gray-100 rounded-lg`}
              title={`Share on ${platform.name}`}
            >
              <IconComponent className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SocialShare;

