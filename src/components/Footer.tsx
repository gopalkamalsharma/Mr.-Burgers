import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <a href="#" className="flex-shrink-0">
              <span className="text-3xl font-display font-black text-brand-red italic tracking-tighter">
                MR. BURGERS <span className="text-brand-yellow">DRINKS</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the boldest flavors and the coldest drinks in the city since 2024. 
              Join the movement and crave the difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-widest">Menu</a></li>
              <li><a href="#combos" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-widest">Combos</a></li>
              <li><a href="#offers" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-widest">Offers</a></li>
              <li><a href="#stores" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-widest">Stores</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-red" />
                <span>123 Main St, Metro City, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-red" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-red" />
                <span>hello@mrburgers.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm">Get 20% off your first order when you sign up!</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button type="submit" className="btn-secondary py-3 text-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            © 2026 MR. BURGERS DRINKS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
