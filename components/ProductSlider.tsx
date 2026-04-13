"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (page: number) => {
    setCurrentIndex(page);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <FaSearch className="text-6xl text-text-light mb-4 mx-auto" />
        <p className="text-xl text-text-light">No hay productos en esta categoría</p>
      </div>
    );
  }

  const startIndex = currentIndex * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-accent-purple hover:bg-pastel-purple hover:scale-110 transition-all duration-300 border-2 border-pastel-purple/30"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-accent-purple hover:bg-pastel-purple hover:scale-110 transition-all duration-300 border-2 border-pastel-purple/30"
            aria-label="Siguiente"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </>
      )}

      {/* Products Grid - 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-accent-purple scale-125"
                  : "bg-pastel-purple hover:bg-purple-300"
              }`}
              aria-label={`Ir a página ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
