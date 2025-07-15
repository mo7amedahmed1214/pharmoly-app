export interface ContactInfo {
  phone: string;
  email: string;
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface CurrencyOption {
  code: string;
  symbol: string;
}


export interface NavigationItem {
  label: string;
  href: string;
  isHighlighted?: boolean;
  highlightColor?: 'blue' | 'orange';
  hasDropdown?: boolean;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}
export interface ActionButtonProps {
  icon: React.ReactNode;
  label?: string;
  count?: number;
  onClick?: () => void;
  href?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface TopBarProps {
  contactInfo: ContactInfo;
  languages: LanguageOption[];
  currencies: CurrencyOption[];
  features: string[];
}

export interface HeaderProps {
  topBar: TopBarProps;
  navigation: NavigationItem[];
  cartTotal: string;
  cartCount: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  sku: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  inStock: boolean;
  description: string;
  images: ProductImage[];
  features: ProductFeature[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
}

export interface ProductTabContent {
  id: string;
  label: string;
  content: string;
}

export interface SocialSharePlatform {
  name: string;
  icon: string;
  url: string;
}

export interface ProductDetailsPageProps {
  product: Product;
  relatedProducts: RelatedProduct[];
  breadcrumbs: BreadcrumbItem[];
}


