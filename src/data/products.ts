import { Product, RelatedProduct, BreadcrumbItem } from '@/types/header';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cutter Bite MD Insect Bite Relief Stick',
    category: 'ALLERGIES',
    brand: 'BiteMD',
    sku: 'SGT6U7V8',
    rating: 5,
    reviewCount: 3,
    price: 3.66,
    originalPrice: 7.19,
    discount: 50,
    inStock: true,
    description: 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentumiaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
    images: [
      {
        id: '1',
        url: '/images/product.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Main View',
        isMain: true
      },
      {
        id: '2',
        url: '/images/product3.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Side View'
      },
      {
        id: '3',
        url: '/images/kidGirl.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Usage'
      }
    ],
    features: [
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
    ]
  },
  {
    id: '2',
    name: 'Cutter Bite MD Insect Bite Relief Stick',
    category: 'ALLERGIES',
    brand: 'BiteMD',
    sku: 'SGT6U7V8',
    rating: 5,
    reviewCount: 3,
    price: 3.66,
    originalPrice: 7.19,
    discount: 50,
    inStock: true,
    description: 'The stick applicator easily fits in a pocket – handy for hiking and traveling.',
    images: [
      {
        id: '1',
        url: '/images/product2.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Main View',
        isMain: true
      },
      {
        id: '2',
        url: '/images/product3.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Side View'
      },
      {
        id: '3',
        url: '/images/product.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Usage'
      }
    ],
    features: [
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
    ]
  },
  {
    id: '3',
    name: 'Cutter Bite MD Insect Bite Relief Stick',
    category: 'ALLERGIES',
    brand: 'BiteMD',
    sku: 'SGT6U7V8',
    rating: 5,
    reviewCount: 3,
    price: 3.66,
    originalPrice: 7.19,
    discount: 50,
    inStock: true,
    description: 'The stick applicator easily fits in a pocket – handy for hiking and traveling.',
    images: [
      {
        id: '1',
        url: '/images/product2.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Main View',
        isMain: true
      },
      {
        id: '2',
        url: '/images/product3.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Side View'
      },
      {
        id: '3',
        url: '/images/product.png',
        alt: 'Cutter Bite MD Insect Bite Relief Stick - Usage'
      }
    ],
    features: [
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
    ]
  },
];

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: string, limit: number = 4): RelatedProduct[] => {
  return products
    .filter(product => product.id !== currentProductId)
    .slice(0, limit)
    .map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      rating: product.rating,
      reviewCount: product.reviewCount,
      image: product.images[0]?.url || '',
      inStock: product.inStock
    }));
};

export const getBreadcrumbs = (product: Product): BreadcrumbItem[] => {
  return [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.category, href: `/products?category=${product.category.toLowerCase()}` }
  ];
};

