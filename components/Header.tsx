"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdAutoAwesome } from "react-icons/md";
import { useCart } from "@/context/CartContext";
import {motion} from 'framer-motion'
import Cart from "@/components/Cart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setIsCartOpen } = useCart();

  return (
    <>
<motion.header
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="fixed top-0 left-0 right-0 z-40 glass shadow-sm"
>
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 sm:gap-2 group min-w-0">
              <span className="text-2xl sm:text-3xl flex-shrink-0 animate-bounce-soft">
                <GiPartyPopper />
              </span>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold gradient-text truncate">
                  Vasos Mágicos
                </h1>
                <p className="text-xs text-text-light hidden md:block">
                  Diseños personalizados para niños <MdAutoAwesome className="inline-block" />
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

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 bg-white border-2 border-accent-purple text-accent-purple px-5 py-2.5 rounded-full hover:bg-pastel-purple hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold"
                aria-label="Abrir carrito de compras"
              >
                <FaShoppingCart className="text-lg" />
                Carrito
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent-pink text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

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

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center gap-1 flex-shrink-0">
              {/* Cart Button Mobile */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-accent-purple hover:text-accent-pink transition-colors flex-shrink-0"
                aria-label="Abrir carrito de compras"
              >
                <FaShoppingCart className="text-xl" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-pink text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-soft">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-accent-purple hover:text-accent-pink transition-colors p-2.5 flex-shrink-0"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
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
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-white border-2 border-accent-purple text-accent-purple px-5 py-3 rounded-full font-bold mt-2"
                >
                  <FaShoppingCart className="text-xl" />
                  Ver Carrito ({totalItems})
                </button>
                <a
                  href="https://wa.me/523313262108?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white px-5 py-3 rounded-full font-bold"
                >
                  <FaWhatsapp className="text-xl" />
                  Ordenar Ahora
                </a>
              </div>
            </nav>
          )}
        </div>
      </motion.header>

      {/* Cart Component */}
      <Cart />
    </>
  );
}
