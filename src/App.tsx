import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ComboCard from './components/ComboCard';
import StoreLocator from './components/StoreLocator';
import ExitIntentPopup from './components/ExitIntentPopup';
import StickyCTA from './components/StickyCTA';
import SpinWheel from './components/SpinWheel';
import { PRODUCTS, HEADLINES, CTAS, SOCIAL_PROOF } from './constants';
import { motion } from 'motion/react';
import { ArrowRight, Star, Zap, Clock, ShieldCheck } from 'lucide-react';

type Variation = 'A' | 'B' | 'C';

export default function App() {
  const [variation, setVariation] = React.useState<Variation>('A');
  const [cartCount, setCartCount] = React.useState(0);

  const handleAddToCart = (product: any) => {
    setCartCount(prev => prev + 1);
  };

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  const combos = PRODUCTS.filter(p => p.category === 'Combos');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Variation Switcher (For Demo/Testing) */}
      <div className="fixed top-24 left-4 z-[60] flex flex-col space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow mb-2">A/B Testing</span>
        {(['A', 'B', 'C'] as Variation[]).map(v => (
          <button
            key={v}
            onClick={() => setVariation(v)}
            className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
              variation === v ? 'bg-brand-red text-white scale-110' : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {variation === 'A' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <span className="bg-brand-red/10 text-brand-red px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-brand-red/20">
                    🔥 New Limited Edition
                  </span>
                  <h1 className="text-7xl sm:text-8xl font-display text-white leading-[0.9] tracking-tighter uppercase italic">
                    {HEADLINES[0]}
                  </h1>
                  <p className="text-gray-400 text-xl max-w-lg leading-relaxed">
                    Experience the ultimate fusion of ice-cold refreshment and flame-grilled perfection. 
                    Your taste buds aren't ready.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="btn-primary py-5 px-12 text-lg flex items-center justify-center space-x-3">
                    <span>{CTAS[0]}</span>
                    <ArrowRight size={24} />
                  </button>
                  <button className="btn-outline py-5 px-12 text-lg">
                    {CTAS[2]}
                  </button>
                </div>
                <div className="flex items-center space-x-8 pt-10">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        className="w-12 h-12 rounded-full border-4 border-brand-black"
                        alt="User"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="flex text-brand-yellow">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Trusted by 50,000+ Cravers
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                className="relative"
              >
                <div className="absolute -inset-20 bg-brand-red/20 rounded-full blur-[120px] animate-pulse" />
                <img 
                  src="https://picsum.photos/seed/hero/1000/1000" 
                  alt="Hero Product" 
                  className="relative w-full h-auto rounded-[60px] shadow-2xl shadow-red-500/20 transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-brand-yellow text-brand-black p-8 rounded-[30px] shadow-2xl transform -rotate-6">
                  <span className="text-4xl font-display font-black leading-none uppercase">ONLY<br/>$15.99</span>
                </div>
              </motion.div>
            </div>
          )}

          {variation === 'B' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-32 space-y-16">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-8"
              >
                <h1 className="text-8xl sm:text-9xl font-display text-white leading-[0.85] tracking-tighter uppercase italic">
                  {HEADLINES[2]}
                </h1>
                <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed">
                  The boldest flavors in the city, delivered to your door in under 30 minutes. 
                  Fresh, fast, and absolutely loaded.
                </p>
                <div className="flex justify-center space-x-6">
                  <button className="btn-secondary py-6 px-16 text-xl">
                    {CTAS[4]}
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-3 gap-8"
              >
                {[1,2,3].map(i => (
                  <div key={i} className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 group">
                    <img 
                      src={`https://picsum.photos/seed/food${i}/800/1000`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Food"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {variation === 'C' && (
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-brand-red flex items-center justify-center p-20">
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-10"
                >
                  <h1 className="text-8xl font-display text-white leading-none tracking-tighter uppercase italic">
                    {HEADLINES[4]}
                  </h1>
                  <button className="bg-brand-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xl hover:bg-white hover:text-brand-black transition-all">
                    {CTAS[1]}
                  </button>
                </motion.div>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/lifestyle/1200/1200" 
                  className="w-full h-full object-cover"
                  alt="Lifestyle"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/50 to-transparent" />
              </div>
            </div>
          )}
        </section>

        {/* Social Proof / Trust Bar */}
        <section className="py-12 bg-white/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-display font-black">FORBES</span>
              <span className="text-2xl font-display font-black">EATER</span>
              <span className="text-2xl font-display font-black">VICE</span>
              <span className="text-2xl font-display font-black">THRILLIST</span>
              <span className="text-2xl font-display font-black">INSIDER</span>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section id="menu" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-8 md:space-y-0">
            <div className="space-y-6">
              <h2 className="text-6xl font-display text-white leading-none tracking-tighter uppercase italic">
                Our <span className="text-brand-yellow">Best</span> Sellers
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                The ones that started it all. Hand-picked by our community of flavor seekers.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="btn-outline py-3 px-8 text-sm">View Full Menu</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Combo Builder / Featured Combo */}
        <section id="combos" className="py-32 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ComboCard 
              combo={combos[0]} 
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>

        {/* Why Choose Us / Features */}
        <section className="py-32 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="card-glass space-y-6 text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-display text-white">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Delivered to your door in under 30 minutes, or it's on us.</p>
              </div>
              <div className="card-glass space-y-6 text-center">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="text-brand-yellow" size={32} />
                </div>
                <h3 className="text-xl font-display text-white">Premium Taste</h3>
                <p className="text-gray-400 text-sm">We use only the freshest ingredients and secret house sauces.</p>
              </div>
              <div className="card-glass space-y-6 text-center">
                <div className="w-16 h-16 bg-brand-neon/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="text-brand-neon" size={32} />
                </div>
                <h3 className="text-xl font-display text-white">Late Night Fix</h3>
                <p className="text-gray-400 text-sm">Open until 2 AM for all your midnight cravings and hunger pangs.</p>
              </div>
              <div className="card-glass space-y-6 text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-xl font-display text-white">Quality Guaranteed</h3>
                <p className="text-gray-400 text-sm">100% satisfaction guarantee on every single order you place.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-brand-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display text-white text-center mb-20 uppercase italic tracking-tighter">
              What the <span className="text-brand-red">Crave Squad</span> Says
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SOCIAL_PROOF.map((item, i) => (
                <div key={i} className="card-glass space-y-6">
                  <div className="flex text-brand-yellow">
                    {[...Array(item.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-lg italic leading-relaxed">"{item.review}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-black text-xs">
                      {item.name[0]}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StoreLocator />
      </main>

      <Footer />
      
      <StickyCTA />
      <ExitIntentPopup />
      <SpinWheel />
    </div>
  );
}
