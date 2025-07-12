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

