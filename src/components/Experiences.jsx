import React from 'react';
import { Camera, Utensils, TreePine, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    icon: <Camera className="w-8 h-8 text-bolivia-yellow" />,
    title: 'Cultura Viva',
    description: 'Sumérgete en tradiciones ancestrales, mercados coloridos y festivales vibrantes que mantienen viva la historia andina y amazónica.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Utensils className="w-8 h-8 text-bolivia-red" />,
    title: 'Gastronomía',
    description: 'Saborea la fusión única de ingredientes nativos y técnicas modernas en una de las escenas culinarias emergentes más emocionantes.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <TreePine className="w-8 h-8 text-bolivia-green" />,
    title: 'Naturaleza Pura',
    description: 'Desde la selva amazónica hasta los valles interandinos, descubre una biodiversidad incomparable en su estado más prístino.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Mountain className="w-8 h-8 text-white" />,
    title: 'Aventura Extrema',
    description: 'Desafía tus límites escalando picos nevados de 6000m o descendiendo en bicicleta por la mítica Ruta de la Muerte.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Experiences = () => {
  return (
    <section id="experiencias" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-bolivia-green tracking-widest uppercase mb-3">Vívelo</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Experiencias Únicas</h3>
            <p className="text-gray-400 text-lg">
              No solo visites Bolivia, siéntela. Hemos diseñado experiencias inmersivas 
              para conectar verdaderamente con el alma del país.
            </p>
          </div>
          <button className="text-white border-b-2 border-bolivia-red pb-1 font-medium hover:text-bolivia-red transition-colors whitespace-nowrap">
            Ver todas las experiencias
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {exp.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{exp.title}</h4>
                <p className="text-gray-300 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
