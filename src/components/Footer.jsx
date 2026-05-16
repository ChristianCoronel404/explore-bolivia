import React from 'react';
import { Compass, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <Compass className="w-8 h-8 text-bolivia-red" />
              <span className="font-bold text-xl tracking-tight text-white">Bolivia<span className="text-bolivia-red">Travel</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Diseñamos viajes premium y auténticos por toda Bolivia. 
              Nuestra misión es mostrarte el corazón de Sudamérica con lujo, 
              seguridad y responsabilidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-bolivia-red hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-bolivia-yellow hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-bolivia-green hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Destinos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Salar de Uyuni</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Lago Titicaca</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">La Paz Mágica</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Amazonía Boliviana</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Ruta del Vino en Tarija</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Compañía</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Sostenibilidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Blog de Viajes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Suscríbete para recibir ofertas exclusivas e inspiración de viajes.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-bolivia-red transition-colors"
                />
              </div>
              <button className="w-full bg-bolivia-red hover:bg-red-700 text-white py-3 rounded-xl font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bolivia Travel. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-bolivia-red inline-block"></span> Hecho con pasión</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
