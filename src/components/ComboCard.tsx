import React from 'react';
import { Plus, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ComboCardProps {
  key?: React.Key;
  combo: Product;
  onAddToCart: (product: Product) => void;
}

export default function ComboCard({ combo, onAddToCart }: ComboCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-brand-red rounded-3xl p-8 relative overflow-hidden group shadow-2xl shadow-red-500/20"
    >
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-2 bg-brand-black/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
            <Star size={16} fill="#FACC15" className="text-brand-yellow" />
            <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Ultimate Combo</span>
          </div>
          
          <h3 className="text-4xl font-display text-white leading-none uppercase italic italic-small tracking-tighter">
            {combo.name}
          </h3>
          
          <p className="text-white/80 text-lg leading-relaxed max-w-md">
            {combo.description}
          </p>
          
          <div className="flex items-center space-x-6">
            <span className="text-4xl font-display text-brand-yellow">${combo.price.toFixed(2)}</span>
            <button 
              onClick={() => onAddToCart(combo)}
              className="btn-secondary py-4 px-10 text-sm flex items-center space-x-3 hover:bg-brand-black hover:text-white transition-all"
            >
              <Plus size={20} />
              <span>Grab the Deal</span>
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img 
              src={combo.image} 
              alt={combo.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-black p-6 rounded-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-2xl font-display font-black leading-none">SAVE<br/>$4.00</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
