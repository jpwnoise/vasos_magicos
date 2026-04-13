"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaCartPlus } from "react-icons/fa";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

function getProductIcon(iconName: string, color: string) {
  const iconSize = 48;

  switch (iconName) {
    case "Bear":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <circle cx="20" cy="16" r="8"/><circle cx="44" cy="16" r="8"/>
          <circle cx="32" cy="32" r="20"/>
          <circle cx="26" cy="28" r="3" fill="white"/><circle cx="38" cy="28" r="3" fill="white"/>
          <ellipse cx="32" cy="36" rx="4" ry="3" fill="white"/>
        </svg>
      );
    case "Cat":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <polygon points="16,20 20,8 28,18"/><polygon points="48,20 44,8 36,18"/>
          <ellipse cx="32" cy="32" rx="18" ry="20"/>
          <circle cx="26" cy="28" r="3" fill="white"/><circle cx="38" cy="28" r="3" fill="white"/>
          <polygon points="32,34 30,38 34,38" fill="white"/>
        </svg>
      );
    case "Rabbit":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <ellipse cx="24" cy="12" rx="6" ry="14"/><ellipse cx="40" cy="12" rx="6" ry="14"/>
          <circle cx="32" cy="34" r="18"/>
          <circle cx="26" cy="30" r="3" fill="white"/><circle cx="38" cy="30" r="3" fill="white"/>
          <ellipse cx="32" cy="38" rx="3" ry="2" fill="white"/>
        </svg>
      );
    case "Shield":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <path d="M32 4L8 16v16c0 14 10 24 24 28 14-4 24-14 24-28V16L32 4z"/>
          <path d="M32 16l-12 6v8c0 8 5 13 12 16 7-3 12-8 12-16v-8L32 16z" fill="white" opacity="0.3"/>
        </svg>
      );
    case "Star":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <path d="M32 4l8 18 20 2-15 13 5 19-18-10-18 10 5-19L4 24l20-2 8-18z"/>
          <path d="M32 16l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1 5-12z" fill="white" opacity="0.3"/>
        </svg>
      );
    case "Crown":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <path d="M8 44l4-24 10 10 10-18 10 18 10-10 4 24H8z"/>
          <circle cx="12" cy="18" r="3" fill="white"/><circle cx="32" cy="10" r="3" fill="white"/><circle cx="52" cy="18" r="3" fill="white"/>
          <rect x="8" y="44" width="48" height="6" rx="2" fill="white" opacity="0.3"/>
        </svg>
      );
    case "Castle":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <rect x="8" y="24" width="12" height="32"/><rect x="26" y="16" width="12" height="40"/><rect x="44" y="24" width="12" height="32"/>
          <rect x="4" y="20" width="20" height="6"/><rect x="22" y="12" width="20" height="6"/><rect x="40" y="20" width="20" height="6"/>
          <rect x="28" y="40" width="8" height="16" rx="4" fill="white" opacity="0.3"/>
        </svg>
      );
    case "Rocket":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <path d="M32 4c-8 8-12 20-12 32h24c0-12-4-24-12-32z"/>
          <circle cx="32" cy="28" r="6" fill="white" opacity="0.5"/>
          <path d="M20 36l-8 12 12-4M44 36l8 12-12-4"/>
          <path d="M28 44h8l-4 12-4-12z" fill="#f97316"/>
        </svg>
      );
    case "Moon":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <path d="M40 8a24 24 0 1 0 0 48 18 18 0 0 1 0-48z"/>
          <circle cx="20" cy="16" r="2" fill="white"/><circle cx="44" cy="20" r="2" fill="white"/><circle cx="16" cy="36" r="2" fill="white"/>
        </svg>
      );
    case "Rainbow":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64">
          <path d="M8 40a24 24 0 0 1 48 0" stroke="#ec4899" strokeWidth="4" fill="none"/>
          <path d="M12 40a20 20 0 0 1 40 0" stroke="#f97316" strokeWidth="4" fill="none"/>
          <path d="M16 40a16 16 0 0 1 32 0" stroke="#eab308" strokeWidth="4" fill="none"/>
          <path d="M20 40a12 12 0 0 1 24 0" stroke="#22c55e" strokeWidth="4" fill="none"/>
          <circle cx="32" cy="44" r="4" fill="white"/>
        </svg>
      );
    case "Butterfly":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <ellipse cx="20" cy="24" rx="14" ry="16"/><ellipse cx="44" cy="24" rx="14" ry="16"/>
          <ellipse cx="22" cy="42" rx="10" ry="12"/><ellipse cx="42" cy="42" rx="10" ry="12"/>
          <rect x="30" y="16" width="4" height="32" rx="2" fill="white" opacity="0.5"/>
          <circle cx="16" cy="22" r="4" fill="white" opacity="0.3"/><circle cx="48" cy="22" r="4" fill="white" opacity="0.3"/>
        </svg>
      );
    case "Flower":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <circle cx="32" cy="20" r="8"/><circle cx="32" cy="44" r="8"/><circle cx="20" cy="32" r="8"/><circle cx="44" cy="32" r="8"/>
          <circle cx="32" cy="32" r="8" fill="#eab308"/>
        </svg>
      );
    case "Soccer":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <circle cx="32" cy="32" r="24"/>
          <polygon points="32,16 38,22 36,30 28,30 26,22" fill="white"/><polygon points="46,28 50,36 44,42 38,38 40,30" fill="white"/>
          <polygon points="24,38 28,46 22,50 16,44 20,36" fill="white"/><polygon points="38,44 42,50 36,54 30,50 32,44" fill="white"/>
        </svg>
      );
    case "Pony":
      return null;
    default:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill={color}>
          <circle cx="32" cy="32" r="24"/>
        </svg>
      );
  }
}

// Ángulo de inclinación de la "mesa"
const TABLE_TILT = 24;

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "523313262108";
  const message = encodeURIComponent(`Hola! Me interesa el producto: ${product.name}`);
  const hasImage = !!product.image;
  const { addToCart } = useCart();
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  return (
    <div
      className="group animate-slide-up opacity-0 rounded-3xl"
      style={{
        animationDelay: `${index * 0.1}s`,
        perspective: "1200px",
        position: "relative",
      }}
    >
      {/* "Mesa" inclinada - fondo decorativo */}
      <div
        ref={cardRef}
        className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-400/60"
        style={{
          transform: `rotateX(${TABLE_TILT}deg)`,
          transformOrigin: "center bottom",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Decorative elements - en la mesa */}
        <div className="absolute inset-0 rounded-3xl " style={{
          background: `linear-gradient(135deg, ${product.colors[0]}, ${product.colors[1]})`,
          height: "55%",
        }}>
          <div className="absolute top-2 right-2 animate-sparkle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#eab308">
              <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 animate-sparkle" style={{ animationDelay: "0.5s" }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#ec4899">
              <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent-purple shadow-sm">
            Mín. {product.minQty} piezas
          </div>
        </div>
      </div>

      {/* Contenido "parado" - sin rotación */}
      <div className="relative z-10">
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
            getProductIcon(product.icon, product.colors[2] ? "#ffffff" : product.colors[0])
          )}
        </div>

        {/* Product Info */}
        <div
          className="p-5 my-8 space-y-5 border border-gray-400/40 bg-white shadow-xl rounded-2xl mx-auto max-w-[85%] -translate-y-5"
          style={{
            background: `linear-gradient(135deg, white, ${product.colors[1]})`,
            transformStyle: "preserve-3d",
            transform: "translateY(-20px) perspective(800px) rotateY(-6deg)",
          }}
        >
          <h3 className="text-xl font-bold text-text-dark font-fredoka">
            {product.name}
          </h3>

          <p className="text-sm text-text-light leading-relaxed">
            {product.description}
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-text-light">Colores:</span>
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

          {/* Price and Add to Cart Button */}
          <div className="flex items-center justify-between pt-3 border-t border-pastel-purple/30">
            <div>
              <span className="text-xs text-text-light">Desde</span>
              <p className="text-2xl font-bold gradient-text font-fredoka">
                ${product.price} <span className="text-sm text-text-light font-normal">c/u</span>
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                addedFeedback
                  ? "bg-accent-green text-white"
                  : "bg-gradient-to-r from-accent-purple to-accent-pink text-white"
              }`}
              aria-label="Agregar al carrito"
            >
              <FaCartPlus className="text-lg" />
              {addedFeedback ? "¡Agregado!" : "Agregar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
