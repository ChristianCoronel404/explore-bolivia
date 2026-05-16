import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    name: 'Salar de Uyuni',
    location: 'Potosí',
    image: 'https://images.unsplash.com/photo-1526398977052-654221a252b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'El desierto de sal más grande y alto del mundo. Un espejo del cielo infinito.'
  },
  {
    id: 2,
    name: 'La Paz',
    location: 'La Paz',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'La ciudad que toca las nubes, rodeada por el majestuoso nevado Illimani.'
  },
  {
    id: 3,
    name: 'Lago Titicaca',
    location: 'La Paz / Copacabana',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'El lago navegable más alto del mundo, cuna de la civilización incaica.'
  },
  {
    id: 4,
    name: 'Sucre',
    location: 'Chuquisaca',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'La ciudad blanca de América, capital histórica llena de encanto colonial.'
  },
  {
    id: 5,
    name: 'Santa Cruz',
    location: 'Santa Cruz',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'El motor económico y paraíso tropical vibrante del oriente boliviano.'
  },
  {
    id: 6,
    name: 'Parque Madidi',
    location: 'La Paz (Amazonía)',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Una de las reservas con mayor biodiversidad del planeta entero.'
  }
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-bolivia-red tracking-widest uppercase mb-3">Descubre</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Destinos Icónicos</h3>
          <p className="text-gray-400 text-lg">
            Explora maravillas naturales y joyas culturales que hacen de Bolivia 
            un destino sin igual en el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-2xl font-bold text-white mb-1">{dest.name}</h4>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-bolivia-red" />
                    {dest.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6 line-clamp-2">{dest.description}</p>
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-bolivia-red text-white font-medium transition-colors duration-300">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
