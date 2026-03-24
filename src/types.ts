export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Soft Drinks' | 'Shakes' | 'Specials' | 'Burgers' | 'Combos';
  isBestSeller?: boolean;
}

export interface Combo extends Product {
  items: string[];
}

export interface Store {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  hours: string;
}
