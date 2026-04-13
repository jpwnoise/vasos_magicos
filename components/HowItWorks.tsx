import { FaWhatsapp, FaPalette, FaShoppingBag, FaRocket } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const steps = [
  {
    icon: <FaPalette className="text-4xl" />,
    title: "Elige tu diseño",
    description: "Explora nuestras categorías y selecciona el diseño que más te guste",
    color: "from-pink-400 to-pink-500",
    bg: "bg-pastel-pink",
  },
  {
    icon: <FaShoppingBag className="text-4xl" />,
    title: "Personaliza tu pedido",
    description: "Escríbenos por WhatsApp con el diseño, cantidad y colores que deseas",
    color: "from-purple-400 to-purple-500",
    bg: "bg-pastel-purple",
  },
  {
    icon: <FaRocket className="text-4xl" />,
    title: "Recibe tu pedido",
    description: "Preparamos tus vasos personalizados y te los entregamos",
    color: "from-blue-400 to-blue-500",
    bg: "bg-pastel-blue",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-fredoka">
            ¿Cómo Funciona? <GiPartyPopper className="inline-block text-2xl" />
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Ordenar tus vasos personalizados es muy fácil. ¡Solo sigue estos pasos!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md font-bold text-accent-purple z-10 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Card */}
              <div className={`${step.bg} rounded-3xl p-8 h-full card-hover`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl mb-5 shadow-lg animate-float`} style={{ animationDelay: `${index * 0.3}s` }}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-dark mb-3 font-fredoka">
                  {step.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl text-accent-purple animate-bounce-soft" style={{ animationDelay: `${index * 0.5}s` }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/523313262108?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-green to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-soft"
          >
            <FaWhatsapp className="text-2xl" />
            ¡Empezar a Ordenar Ahora!
          </a>
        </div>
      </div>
    </section>
  );
}
