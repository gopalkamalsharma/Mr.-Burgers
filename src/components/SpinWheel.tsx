import React from 'react';
import { Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PRIZES = [
  'Free Drink',
  '10% Off',
  'Free Fries',
  '20% Off',
  'Buy 1 Get 1',
  'Free Burger',
  '5% Off',
  'Try Again'
];

export default function SpinWheel() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [rotation, setRotation] = React.useState(0);
  const [result, setResult] = React.useState<string | null>(null);

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const extraRotation = 1800 + Math.floor(Math.random() * 360);
    const newRotation = rotation + extraRotation;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const index = Math.floor(((newRotation % 360) / 360) * PRIZES.length);
      setResult(PRIZES[PRIZES.length - 1 - index]);
    }, 5000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-[80] bg-brand-yellow text-brand-black p-4 rounded-full shadow-2xl shadow-yellow-500/30 hover:scale-110 transition-transform animate-bounce"
      >
        <Gift size={32} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-brand-black border border-white/10 p-12 rounded-[40px] w-full max-w-lg overflow-hidden flex flex-col items-center space-y-12"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center space-y-4">
                <h3 className="text-4xl font-display text-white uppercase italic tracking-tighter">
                  Spin to <span className="text-brand-yellow">Win</span>
                </h3>
                <p className="text-gray-400 text-sm">Feeling lucky? Spin the wheel and unlock a secret deal!</p>
              </div>

              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 z-10 w-8 h-12 bg-brand-red rounded-b-full shadow-lg" />
                
                <motion.div
                  animate={{ rotate: rotation }}
                  transition={{ duration: 5, ease: [0.45, 0.05, 0.55, 0.95] }}
                  className="w-full h-full rounded-full border-8 border-brand-yellow overflow-hidden relative"
                  style={{ background: 'conic-gradient(#E11D48 0% 12.5%, #09090B 12.5% 25%, #E11D48 25% 37.5%, #09090B 37.5% 50%, #E11D48 50% 62.5%, #09090B 62.5% 75%, #E11D48 75% 87.5%, #09090B 87.5% 100%)' }}
                >
                  {PRIZES.map((prize, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-start justify-center pt-8"
                      style={{ transform: `translate(-50%, -50%) rotate(${i * (360 / PRIZES.length)}deg)` }}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-white transform rotate-180 writing-mode-vertical-rl">
                        {prize}
                      </span>
                    </div>
                  ))}
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-yellow rounded-full shadow-2xl border-4 border-brand-black flex items-center justify-center z-20">
                    <div className="w-4 h-4 bg-brand-black rounded-full" />
                  </div>
                </div>
              </div>

              <div className="w-full space-y-6">
                {result ? (
                  <div className="text-center space-y-6">
                    <div className="bg-brand-neon/10 border border-brand-neon/20 p-6 rounded-2xl">
                      <p className="text-xs font-black uppercase tracking-widest text-brand-neon mb-2">You Won!</p>
                      <h4 className="text-3xl font-display text-white">{result}</h4>
                    </div>
                    <button className="btn-primary w-full py-4 text-sm">Claim Now</button>
                  </div>
                ) : (
                  <button 
                    onClick={spin}
                    disabled={isSpinning}
                    className="btn-secondary w-full py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
