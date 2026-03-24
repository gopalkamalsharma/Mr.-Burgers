import { ShoppingCart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-full max-w-lg px-4"
        >
          <div className="bg-brand-black/90 backdrop-blur-2xl border border-white/10 rounded-full p-4 flex items-center justify-between shadow-2xl shadow-red-500/20">
            <div className="flex items-center space-x-4 pl-4">
              <div className="bg-brand-red p-3 rounded-full">
                <ShoppingCart size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Ready to Crave?</span>
                <span className="text-sm font-display text-white">Your cart is empty</span>
              </div>
            </div>
            
            <button className="btn-primary py-3 px-8 text-xs flex items-center space-x-3">
              <span>Order Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
