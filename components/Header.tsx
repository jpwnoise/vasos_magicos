"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl animate-bounce-soft">
              <GiPartyPopper />
            </span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold gradient-text font-['var(--font-fredoka)]">
                Vasos Mágicos
              </h1>
              <p className="text-xs text-text-light hidden sm:block">
                Diseños personalizados para niños ✨
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
            <a href="#productos" className="text-text-dark hover:text-accent-purple font-semibold transition-colors">
              Productos
            </a>
            <a href="#como-funciona" className="text-text-dark hover:text-accent-purple font-semibold transition-colors">
              Cómo Funciona
            </a>
            <a
              href="https://wa.me/523313262108?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold"
            >
              <FaWhatsapp className="text-lg" />
              Ordenar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-accent-purple hover:text-accent-pink transition-colors p-2"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-pastel-purple/30 animate-slide-up" aria-label="Navegación móvil">
            <div className="flex flex-col gap-3">
              <a
                href="#productos"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-dark hover:text-accent-purple font-semibold py-2 transition-colors"
              >
                Productos
              </a>
              <a
                href="#como-funciona"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-dark hover:text-accent-purple font-semibold py-2 transition-colors"
              >
                Cómo Funciona
              </a>
              <a
                href="https://wa.me/523313262108?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white px-5 py-3 rounded-full font-bold mt-2"
              >
                <FaWhatsapp className="text-xl" />
                Ordenar Ahora
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
