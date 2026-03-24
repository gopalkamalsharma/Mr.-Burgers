import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="card-glass group relative overflow-hidden"
    >
      {product.isBestSeller && (
        <div className="absolute top-4 left-4 z-10 bg-brand-yellow text-brand-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center space-x-1">
          <Star size={10} fill="currentColor" />
          <span>Best Seller</span>
        </div>
      )}
      
      <div className="aspect-square rounded-2xl overflow-hidden mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-display text-white group-hover:text-brand-yellow transition-colors">
            {product.name}
          </h3>
          <span className="text-brand-neon font-mono font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button 
          onClick={() => onAddToCart(product)}
          className="btn-secondary py-2 px-6 text-xs flex items-center space-x-2 w-full justify-center group-hover:bg-brand-red group-hover:text-white transition-all"
        >
          <Plus size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
      
      <div className="mt-3 text-center">
        <button className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-brand-yellow transition-colors font-bold">
          Make it a combo +$5.00
        </button>
      </div>
    </motion.div>
  );
}
