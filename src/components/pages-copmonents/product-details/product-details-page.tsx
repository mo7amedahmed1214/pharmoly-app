'use client';

import { ProductDetailsPageProps } from '@/types/header';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import ProductImageGallery from './product-image-gallery';
import ProductInfo from './product-info';
import ProductActions from './product-action';
import ProductFeatures from './product-features';
import SocialShare from './social-share';
import ProductTabs from './product-tabs';
import RelatedProducts from './related-products';



const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  product,
  relatedProducts,
  breadcrumbs
}) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Adding ${quantity} of ${product.name} to cart`);
    // Implement add to cart functionality
  };

  const handleAddToWishlist = () => {
    console.log(`Adding ${product.name} to wishlist`);
    // Implement add to wishlist functionality
  };

  const handleCompare = () => {
    console.log(`Adding ${product.name} to compare`);
    // Implement compare functionality
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} currentPage={product.name} />

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="relative">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
            discount={product.discount}
          />
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <ProductInfo product={product} />

          <ProductActions
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onCompare={handleCompare}
          />

          <ProductFeatures features={product.features} />

          <SocialShare productName={product.name} />
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs
        description={product.description}
        reviewCount={product.reviewCount}
      />

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductDetailsPage;

