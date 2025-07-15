import { HeaderProps, ProductDetailsPageProps } from "@/types/header";

export const headerData: HeaderProps = {
  topBar: {
    contactInfo: {
      phone: '+375 25 522 18 48',
      email: 'hello@bumedi.com'
    },
    languages: [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Español' },
      { code: 'fr', label: 'Français' }
    ],
    currencies: [
      { code: 'USD', symbol: '$' },
      { code: 'EUR', symbol: '€' },
      { code: 'GBP', symbol: '£' }
    ],
    features: [
      'About Us',
      'Contact',
      'Safe Payment',
      'Free Shipping'
    ]
  },
  navigation: [
    { label: 'Home', href: '/', hasDropdown: true },
    { label: 'Shop', href: '/shop', hasDropdown: true },
    { label: 'Medication', href: '/medication' },
    { label: 'Allergies', href: '/allergies' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    {
      label: 'Exclusive Products',
      href: '/exclusive',
      hasDropdown: true,
      isHighlighted: true,
      highlightColor: 'blue'
    },
    {
      label: 'Campaigns',
      href: '/campaigns',
      hasDropdown: true,
      isHighlighted: true,
      highlightColor: 'orange'
    }
  ],
  cartTotal: '$0.00',
  cartCount: 0
};

// categories in hero section
export const categories = [
  { id: 1, name: "Allergies", imgName: "allergies" },
  { id: 2, name: "Cosmetics", imgName: "cosmetics" },
  { id: 3, name: "Cough, Cold, Fever", imgName: "cough_cold_fever" },
  { id: 4, name: "Dietary", imgName: "dietary" },
  { id: 5, name: "Health", imgName: "health" },
  { id: 6, name: "Medication", imgName: "medication" },
  { id: 7, name: "Medicine", imgName: "medicine" },
  { id: 8, name: "Mouth & Teeth", imgName: "mouth_teeth" },
  { id: 9, name: "Nutrition", imgName: "nutrition" },
  { id: 10, name: "Pollen Sneeze", imgName: "pollen_sneeze" },
  { id: 11, name: "Protection ", imgName: "protection" },
];
// services in services section under hero section direct
export const services = [
  {
    title: "Free Delivery",
    description: "Quisque rhoncus orci neque, nec au nisi condimentum sit amet.",
    image: "/images/services/free_delivery.svg",
    link: "/services/free-delivery"
  },
  {
    title: "Money Return",
    description: "Quisque rhoncus orci neque, nec aunisi condimentum sit amet.",
    image: "/images/services/return_money.svg",
    link: "/services/return-money"
  },
  {
    title: "Member Discount",
    description: "Quisque rhoncus orci neque, nec aunisi condimentum sit amet.",
    image: "/images/services/member.svg",
    link: "/services/member-discount"
  },
  {
    title: "Online Support 24/7",
    description: "Quisque rhoncus orci neque, nec aunisi condimentum sit amet.",
    image: "/images/services/online_support.svg",
    link: "/services/online-support"
  },
];

export const sampleProductData: ProductDetailsPageProps = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Medicine', href: '/medicine' }
  ],
  product: {
    id: 'SGT6U7V8',
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
  relatedProducts: [
    {
      id: '1',
      name: 'Equate Flexible Antibacterial Fabric Bandages',
      price: 1.90,
      originalPrice: 2.80,
      discount: 33,
      rating: 4,
      reviewCount: 267,
      image: '/images/product.png',
      inStock: true
    },
    {
      id: '2',
      name: 'Qunol Magnesium 250mg Gummies 60ct for Nerve, Muscle and Heart Support',
      price: 14.44,
      originalPrice: 17.80,
      discount: 19,
      rating: 4.5,
      reviewCount: 367,
      image: '/images/product1.png',
      inStock: true
    },
    {
      id: '3',
      name: 'Metene Upper Arm Blood Pressure Monitor with Speaker',
      price: 22.99,
      originalPrice: 31.99,
      discount: 29,
      rating: 4.5,
      reviewCount: 367,
      image: '/images/product2.png',
      inStock: true
    },
    {
      id: '4',
      name: 'HALVARD FLUOSHIELD Level 3 Disposable Face Mask With Earloops',
      price: 11.24,
      originalPrice: 14.19,
      discount: 23,
      rating: 4.5,
      reviewCount: 367,
      image: '/images/product1.png',
      inStock: true
    }
  ]
};
