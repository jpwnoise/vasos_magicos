"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DancingVaso {
  src: string;
  alt: string;
  animation: string;
  delay: number;
  duration: number;
  scale: number;
}

const vasos: DancingVaso[] = [
  { src: "/pony.png", alt: "Vaso Pony Mágico", animation: "dance-pony", delay: 0, duration: 2.5, scale: 1.1 },
  { src: "/oso.png", alt: "Vaso Osito Feliz", animation: "dance-bear", delay: 0.3, duration: 3, scale: 0.95 },
  { src: "/dino.png", alt: "Vaso Dino Feliz", animation: "dance-dino", delay: 0.7, duration: 2.8, scale: 1.05 },
  { src: "/pony.png", alt: "Vaso Pony", animation: "dance-pony-2", delay: 1.1, duration: 3.2, scale: 1 },
  { src: "/dino.png", alt: "Vaso Dinosaurio", animation: "dance-dino-2", delay: 1.5, duration: 2.6, scale: 1.08 },
  { src: "/oso.png", alt: "Vaso Oso", animation: "dance-bear-2", delay: 1.9, duration: 2.9, scale: 0.98 },
  // Duplicados para scroll infinito
  { src: "/pony.png", alt: "Vaso Pony Mágico", animation: "dance-pony", delay: 2.3, duration: 2.7, scale: 1.02 },
  { src: "/oso.png", alt: "Vaso Osito Feliz", animation: "dance-bear", delay: 2.6, duration: 3.1, scale: 0.97 },
  { src: "/dino.png", alt: "Vaso Dino Feliz", animation: "dance-dino", delay: 3, duration: 2.9, scale: 1.04 },
  { src: "/pony.png", alt: "Vaso Pony", animation: "dance-pony-2", delay: 3.4, duration: 3.3, scale: 0.99 },
  { src: "/dino.png", alt: "Vaso Dinosaurio", animation: "dance-dino-2", delay: 3.8, duration: 2.5, scale: 1.06 },
  { src: "/oso.png", alt: "Vaso Oso", animation: "dance-bear-2", delay: 4.2, duration: 3, scale: 1 },
];

export default function DancingVasosSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-fredoka animate-bounce-soft">
            Nuestros Vasos Bailarines 💃🕺
          </h2>
          <p className="text-text-light text-lg">
            ¡Mira cómo bailan mientras se deslizan!
          </p>
        </div>
      </div>

      {/* Slider container */}
      <div className="relative w-full overflow-hidden">
        {/* Top gradient overlay for seamless effect */}
        <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-pastel-pink/80 via-transparent to-transparent z-10" />
        <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-t from-pastel-blue/80 via-transparent to-transparent z-10" />
        
        {/* Dancing track */}
        <div className="dancing-track flex items-center justify-start gap-8 md:gap-12 py-8 animate-scroll-left">
          {vasos.map((vaso, index) => (
            <div
              key={`${vaso.alt}-${index}`}
              className={`flex-shrink-0 dancing-item ${vaso.animation}`}
              style={{
                animationDelay: `${vaso.delay}s`,
                animationDuration: `${vaso.duration}s`,
              }}
            >
              <div className="relative group">
                <Image
                  src={vaso.src}
                  alt={vaso.alt}
                  width={140}
                  height={140}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ transform: `scale(${vaso.scale})` }}
                />
                {/* Sparkle effect */}
                <div className="absolute -top-2 -right-2 animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#eab308">
                    <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
