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
