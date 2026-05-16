import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1526398977052-654221a252b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-sm font-bold text-bolivia-yellow tracking-widest uppercase mb-3">Inspiración</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Galería Visual</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Un vistazo a la magia que te espera. Cada rincón de Bolivia es 
          una postal inolvidable.
        </p>
      </div>

      <div className="flex overflow-x-hidden relative group">
        <div className="flex animate-[scroll_40s_linear_infinite] gap-4 px-4 w-max">
          {[...images, ...images].map((src, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="w-72 md:w-96 h-80 md:h-[400px] rounded-3xl overflow-hidden shrink-0 relative"
            >
              <img 
                src={src} 
                alt={`Bolivia scenery ${index}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
