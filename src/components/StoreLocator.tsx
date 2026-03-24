import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { STORES } from '../constants';
import { motion } from 'motion/react';

export default function StoreLocator() {
  return (
    <section id="stores" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl font-display text-white leading-none tracking-tighter uppercase italic">
                Find Your <span className="text-brand-red">Nearest</span> Crave Hub
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                We're expanding fast. Find the closest Mr. Burgers Drinks and get your fix in minutes.
              </p>
            </div>

            <div className="space-y-6">
              {STORES.map((store) => (
                <motion.div 
                  key={store.id}
                  whileHover={{ x: 10 }}
                  className="card-glass border-l-4 border-l-brand-red p-8 space-y-6 group cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-display text-white group-hover:text-brand-yellow transition-colors">{store.name}</h3>
                    <button className="p-3 bg-brand-red/10 text-brand-red rounded-full hover:bg-brand-red hover:text-white transition-all">
                      <Navigation size={20} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 text-gray-400 text-sm">
                      <MapPin size={18} className="text-brand-red" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 text-sm">
                      <Phone size={18} className="text-brand-red" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 text-sm">
                      <Clock size={18} className="text-brand-red" />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="btn-outline w-full py-5 text-lg">
              View All 24 Locations
            </button>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[800px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-red-500/10">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-gray-900">
              <img 
                src="https://picsum.photos/seed/map/1200/1200?grayscale" 
                alt="Map" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
            </div>
            
            {/* Map Markers */}
            {STORES.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="absolute"
                style={{ 
                  top: `${30 + index * 20}%`, 
                  left: `${40 + index * 15}%` 
                }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-red/30 rounded-full blur-xl group-hover:bg-brand-red/50 transition-all animate-pulse" />
                  <div className="relative bg-brand-red p-4 rounded-full shadow-2xl border-4 border-brand-black transform group-hover:scale-110 transition-transform">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-brand-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">{store.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
