import { Product, Store } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Neon Lime Spark',
    price: 4.99,
    description: 'Electric lime with a hint of mint. Ice-cold and refreshing.',
    image: 'https://picsum.photos/seed/lime/400/400',
    category: 'Soft Drinks',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Midnight Berry Shake',
    price: 6.99,
    description: 'Loaded with wild berries and topped with dark chocolate curls.',
    image: 'https://picsum.photos/seed/berry/400/400',
    category: 'Shakes',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'The Boss Burger',
    price: 12.99,
    description: 'Double beef patty, triple cheese, and our secret Mr. Sauce.',
    image: 'https://picsum.photos/seed/burger/400/400',
    category: 'Burgers',
  },
  {
    id: '4',
    name: 'Volcano Mocktail',
    price: 7.99,
    description: 'Spicy mango with a chili rim. A flavor explosion.',
    image: 'https://picsum.photos/seed/mango/400/400',
    category: 'Specials',
  },
  {
    id: '5',
    name: 'Classic Combo',
    price: 15.99,
    description: 'The Boss Burger + Neon Lime Spark + Large Fries.',
    image: 'https://picsum.photos/seed/combo/400/400',
    category: 'Combos',
    isBestSeller: true,
  },
];

export const STORES: Store[] = [
  {
    id: '1',
    name: 'Downtown Hub',
    address: '123 Main St, Metro City',
    lat: 40.7128,
    lng: -74.0060,
    phone: '(555) 123-4567',
    hours: '10 AM - 11 PM',
  },
  {
    id: '2',
    name: 'Westside Plaza',
    address: '456 West Ave, Metro City',
    lat: 40.7282,
    lng: -73.7949,
    phone: '(555) 987-6543',
    hours: '11 AM - 12 AM',
  },
];

export const HEADLINES = [
  "Crave the Bold. Drink the Cold.",
  "Your Daily Dose of Deliciously Loaded.",
  "Ice-Cold Drinks. Flame-Grilled Burgers.",
  "The Ultimate Flavor Combo is Here.",
  "Don't Just Eat. Experience the Crave."
];

export const CTAS = [
  "Order Now",
  "Grab Your Combo",
  "View the Menu",
  "Find Nearest Store",
  "Get 20% Off"
];

export const SOCIAL_PROOF = [
  { name: "Alex Z.", review: "Best shakes in the city! The Midnight Berry is a game-changer.", rating: 5 },
  { name: "Sarah M.", review: "Fastest delivery I've ever had. The Boss Burger was still steaming hot!", rating: 5 },
  { name: "Jake R.", review: "Neon Lime Spark is the only way I survive the summer heat.", rating: 4 },
];
