import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rodríguez",
    role: "Viajera desde España",
    content: "El tour por el Salar de Uyuni superó todas mis expectativas. La organización, los hoteles de sal y el guía fueron absolutamente premium. Una experiencia que cambió mi vida.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    name: "Michael Chen",
    role: "Fotógrafo, USA",
    content: "La logística para recorrer La Paz y el Lago Titicaca fue impecable. Como fotógrafo, aprecié enormemente los horarios calculados para tener la mejor luz del día.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    name: "Sofía & Marcos",
    role: "Luna de Miel, Argentina",
    content: "Buscábamos algo diferente para nuestra luna de miel y Bolivia Travel nos organizó un recorrido romántico, privado y con un lujo sutil que nos encantó. 10/10.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros viajeros</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experiencias reales de personas que confiaron en nosotros para descubrir los secretos de Bolivia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex text-bolivia-yellow mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-8 italic line-clamp-4">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h5 className="text-white font-semibold">{testimonial.name}</h5>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
