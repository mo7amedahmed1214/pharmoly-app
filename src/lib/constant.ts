import { HeaderProps } from "@/types/header";

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
