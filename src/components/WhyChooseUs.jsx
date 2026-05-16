import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, HeartHandshake, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-bolivia-red" />,
      title: "Seguridad Garantizada",
      description: "Operamos con los más altos estándares de seguridad y guías certificados."
    },
    {
      icon: <Clock className="w-6 h-6 text-bolivia-yellow" />,
      title: "Soporte 24/7",
      description: "Asistencia continua durante todo tu viaje, sin importar la hora."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-bolivia-green" />,
      title: "Turismo Sostenible",
      description: "Comprometidos con las comunidades locales y el medio ambiente."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: "Calidad Premium",
      description: "Alojamientos seleccionados y transporte de primera clase."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Nosotros</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Por qué viajar con nosotros?</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Revolucionamos la forma de viajar en Bolivia. Combinamos tecnología moderna 
                con profundo conocimiento local para ofrecerte experiencias sin fricciones, 
                seguras y absolutamente memorables.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Turistas en Bolivia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-2xl">10k+</p>
                    <p className="text-gray-300 text-sm">Viajeros Felices</p>
                  </div>
                  <div className="w-[1px] h-10 bg-white/20"></div>
                  <div>
                    <p className="text-white font-bold text-2xl">50+</p>
                    <p className="text-gray-300 text-sm">Destinos Locales</p>
                  </div>
                  <div className="w-[1px] h-10 bg-white/20"></div>
                  <div>
                    <p className="text-white font-bold text-2xl">4.9/5</p>
                    <p className="text-gray-300 text-sm">Rating Global</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
