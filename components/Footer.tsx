import { FaWhatsapp, FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "523313262108";

  return (
    <footer className="bg-white border-t-4 border-pastel-purple mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-bounce-soft">
                <GiPartyPopper className="text-accent-purple" />
              </span>
              <h3 className="text-2xl font-bold gradient-text font-fredoka">
                Vasos Mágicos
              </h3>
            </div>
            <p className="text-text-light leading-relaxed max-w-md">
              Creamos vasos personalizados con diseños adorables para hacer de tus fiestas infantiles un momento mágico e inolvidable ✨
            </p>
            <p className="text-sm text-text-light">
              © {currentYear} Todos los derechos reservados
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-text-dark font-fredoka">Contacto</h4>
            
            <a 
              href={`https://wa.me/${phoneNumber}?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-green hover:text-emerald-600 transition-colors"
              aria-label="Ordenar por WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
              <span className="text-sm font-semibold">331 326 2108</span>
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center text-accent-pink hover:bg-accent-pink hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pastel-blue rounded-full flex items-center justify-center text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-text-dark font-fredoka">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#productos" className="text-text-light hover:text-accent-purple transition-colors text-sm">
                  Productos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-text-light hover:text-accent-purple transition-colors text-sm">
                  Cómo Funciona
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-pastel-purple/30 px-4 py-4 text-center">
        <p className="text-sm text-text-light">
          Hecho con <FaHeart className="inline text-accent-pink animate-sparkle" /> por Pablo Hernández | Sitio de demostración
        </p>
      </div>
    </footer>
  );
}
