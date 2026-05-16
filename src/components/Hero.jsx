import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533090631-338411005233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Salar de Uyuni" 
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dark-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block glass px-4 py-1.5 rounded-full mb-6 border border-white/20 text-sm font-medium text-bolivia-yellow tracking-wide"
        >
          DESCUBRE EL CORAZÓN DE SUDAMÉRICA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight text-shadow"
        >
          Bolivia como <br className="hidden md:block"/> nunca la viste
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10 text-shadow leading-relaxed"
        >
          Desde el espejo del cielo en Uyuni hasta la inmensidad de la Amazonía. 
          Experiencias premium diseñadas para viajeros extraordinarios.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group flex items-center justify-center gap-2 bg-bolivia-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_20px_rgba(213,43,30,0.4)] hover:shadow-[0_0_30px_rgba(213,43,30,0.6)]">
            Explorar Destinos
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
            Ver Video
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient for transition to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
