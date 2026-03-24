import React from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasShown, setHasShown] = React.useState(false);

  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-brand-red w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl shadow-red-500/20"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 bg-brand-black/20 rounded-full hover:bg-brand-black transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto bg-brand-yellow flex items-center justify-center p-12">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Gift size={120} className="text-brand-black" />
                </motion.div>
              </div>
              
              <div className="p-12 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-display text-white leading-none uppercase italic tracking-tighter">
                    Wait! Don't Go <span className="text-brand-yellow">Empty-Handed</span>
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Get <span className="text-brand-yellow font-black">20% OFF</span> your first order. 
                    Unlock the crave-worthy deal now!
                  </p>
                </div>

                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-brand-black/20 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                  <button className="w-full btn-secondary py-4 text-sm flex items-center justify-center space-x-3">
                    <span>Claim My Discount</span>
                    <ArrowRight size={20} />
                  </button>
                </div>

                <p className="text-[10px] uppercase tracking-widest text-white/50 text-center font-bold">
                  *Limited time offer. Valid for new customers only.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
