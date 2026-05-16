import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Destinos', href: '#destinos' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Galería', href: '#galeria' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Compass className="w-8 h-8 text-bolivia-red" />
            <span className="font-bold text-xl tracking-tight">Bolivia<span className="text-bolivia-red">Travel</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-bolivia-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-red-900/50">
              Reserva Ahora
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-200 hover:text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-white p-2 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-bolivia-red text-white px-6 py-3 rounded-xl font-medium mt-4 w-full text-center">
                Reserva Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
