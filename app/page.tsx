"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <>
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-pastel-gradient py-16 md:py-24 mb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 animate-float">
            <svg width="60" height="60" viewBox="0 0 20 20" fill="#ec4899" opacity="0.3">
              <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: "1s" }}>
            <svg width="50" height="50" viewBox="0 0 20 20" fill="#8b5cf6" opacity="0.3">
              <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 animate-sparkle">
            <svg width="40" height="40" viewBox="0 0 20 20" fill="#f97316" opacity="0.4">
              <circle cx="10" cy="10" r="10"/>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-fredoka animate-slide-up opacity-0">
                  <span className="gradient-text">Vasos Mágicos</span> ✨
                </h1>
                <p className="text-xl md:text-2xl text-text-light mb-8 animate-slide-up opacity-0 delay-1">
                  Diseños personalizados para fiestas infantiles
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up opacity-0 delay-2">
                  <a
                    href="#productos"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Ver Diseños 🎨
                  </a>
                  <a
                    href="https://wa.me/523313262108?text=Hola!%20Me%20interesan%20los%20vasos%20personalizados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-accent-purple border-2 border-accent-purple px-8 py-4 rounded-full text-lg font-bold hover:bg-pastel-purple transition-all duration-300"
                  >
                    Ordenar Ahora 🎉
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center animate-slide-up opacity-0 delay-3">
                <div className="relative w-full max-w-md animate-float">
                  <Image
                    src="/hero.png"
                    alt="Vasos personalizados coloridos para fiestas infantiles"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="max-w-7xl mx-auto px-4 py-12">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-fredoka">
              Nuestros Diseños 🎨
            </h2>
            <p className="text-text-light text-lg">
              Elige la categoría que más te guste y encuentra el diseño perfecto para tu fiesta
            </p>
          </div>

          {/* Category Filter with TiltButton */}
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Category Title */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl" style={{ color: currentCategory?.color }}>
              {currentCategory?.icon === "Star" && "⭐"}
              {currentCategory?.icon === "Heart" && "💖"}
              {currentCategory?.icon === "Crown" && "👑"}
              {currentCategory?.icon === "Moon" && "🌙"}
              {currentCategory?.icon === "Flower" && "🌸"}
              {currentCategory?.icon === "Trophy" && "🏆"}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-fredoka" style={{ color: currentCategory?.color }}>
              {currentCategory?.name || "Todos los Diseños"}
            </h3>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          {/* No results message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-xl text-text-light">No hay productos en esta categoría</p>
            </div>
          )}
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
