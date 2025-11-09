export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  slug: string;
}

export interface NavItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export interface Language {
  code: string;
  label: string;
  flag: string;
  href: string;
}

