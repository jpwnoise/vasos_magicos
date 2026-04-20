"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const TABLE_TILT = 24;

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  const hasImage = !!product.image;

  return (
    <div
      className="group animate-slide-up opacity-0 rounded-3xl"
      style={{
        animationDelay: `${index * 0.1}s`,
        perspective: "1200px",
        position: "relative",
      }}
    >
      {/* ===================== */}
      {/* BASE / MESA (NO INTERACTIVA) */}
      {/* ===================== */}
      <div
        ref={cardRef}
        className="absolute inset-0 z-0 bg-white rounded-3xl shadow-lg border border-gray-400/60 pointer-events-none"
        style={{
          transform: `rotateX(${TABLE_TILT}deg)`,
          transformOrigin: "center bottom",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Fondo degradado decorativo */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, ${product.colors[0]}, ${product.colors[1]})`,
            height: "55%",
          }}
        />

        {/* decoraciones */}
        <div className="absolute top-2 right-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#eab308">
            <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
          </svg>
        </div>

        <div className="absolute bottom-2 left-2" style={{ opacity: 0.8 }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="#ec4899">
            <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
          </svg>
        </div>

        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-purple-600">
          Mín. {product.minQty} piezas
        </div>
      </div>

      {/* ===================== */}
      {/* CONTENIDO (INTERACTIVO) */}
      {/* ===================== */}
      <div className="relative z-20">
        {/* Imagen */}
        <div
          className="relative h-48 sm:h-56 flex items-center justify-center"
          style={{
            animation: "productFloat 3s ease-in-out infinite",
          }}
        >
          {hasImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              width={200}
              height={200}
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
              }}
            />
          ) : (
            <div style={{ color: product.colors[0] }}>No Icon</div>
          )}
        </div>

        {/* Card info */}
        <div
          className="p-5 my-8 space-y-5 border border-gray-400/40 bg-white shadow-xl rounded-2xl mx-auto max-w-[85%] -translate-y-5"
          style={{
            background: `linear-gradient(135deg, white, ${product.colors[1]})`,
            transform: "translateY(-20px) perspective(800px) rotateY(-6deg)",
          }}
        >
          <h3 className="text-xl font-bold">{product.name}</h3>

          <p className="text-sm text-gray-600">{product.description}</p>

          {/* colores */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">Colores:</span>
            <div className="flex gap-1.5">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* precio + botón */}
          <div className="flex items-center justify-between pt-3 border-t">
            <div>
              <span className="text-xs text-gray-500">Desde</span>
              <p className="text-2xl font-bold">
                ${product.price} <span className="text-sm">c/u</span>
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg pointer-events-auto ${
                addedFeedback
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              }`}
              aria-label="Agregar al carrito"
            >
              <FaCartPlus />
              {addedFeedback ? "¡Agregado!" : "Agregar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}