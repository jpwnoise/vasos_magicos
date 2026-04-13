"use client";

import { useState, useRef } from "react";
import { TiltButton } from "react-tilt-button";
import { categories } from "@/data/products";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

// Función para oscurecer un color hex
function darkenColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// Función para mezclar un color con blanco (hacer pastel muy claro)
function lightenToWhite(hex: string, factor: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const newR = Math.round(r + (255 - r) * factor);
  const newG = Math.round(g + (255 - g) * factor);
  const newB = Math.round(b + (255 - b) * factor);
  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

function getCategoryIcon(iconName: string, color: string, isActive: boolean) {
  const iconSize = 18;
  const iconColor = isActive ? "#ffffff" : color;

  switch (iconName) {
    case "Star":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    case "Heart":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      );
    case "Crown":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <path d="M2 20h20l-2-14-5 5-3-7-3 7-5-5-2 14zm2-2l1.5-10.5L9 12l3-7 3 7 3.5-4.5L20 18H4z"/>
        </svg>
      );
    case "Moon":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      );
    case "Flower":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
        </svg>
      );
    case "Trophy":
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} className="drop-shadow-sm">
          <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M6 3h12v7a6 6 0 0 1-12 0V3zM9 21h6M12 16v5"/>
        </svg>
      );
    default:
      return null;
  }
}

function CategoryButton({ cat, isActive, onClick }: {
  cat: typeof categories[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showPuff, setShowPuff] = useState(false);
  const [puffKey, setPuffKey] = useState(0);
  const isAnimating = useRef(false);

  const handleClick = () => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    onClick();
    
    setShowPuff(true);
    setPuffKey(prev => prev + 1);
    
    setTimeout(() => {
      setShowPuff(false);
      isAnimating.current = false;
    }, 1400);
  };

  const puffColor = isActive ? cat.color : darkenColor(cat.color, 20);

  return (
    <div
      ref={buttonRef}
      className="snap-start shrink-0 category-tilt-button relative"
      style={{ perspective: "800px" }}
    >
      {/* Puff cloud animation */}
      {showPuff && (
        <div
          className="pointer-events-none z-50"
          style={{
            position: "absolute",
            left: "-60px",
            right: "-60px",
            top: "-60px",
            bottom: "-60px",
          }}
        >
          {Array.from({ length: 4 }, (_, i) => {
            const baseAngle = (i / 4) * 360 + 45;
            const randomAngleOffset = (Math.random() - 0.5) * 40;
            const angle = baseAngle + randomAngleOffset;
            const radius = 40 + Math.random() * 15;
            const startX = Math.cos((angle * Math.PI) / 180) * radius;
            const startY = Math.sin((angle * Math.PI) / 180) * radius;
            const size = 14 + Math.random() * 10;
            const puffDistance = 25 + Math.random() * 25;
            const puffAngle = angle + (Math.random() - 0.5) * 50;
            const puffX = Math.cos((puffAngle * Math.PI) / 180) * puffDistance;
            const puffY = Math.sin((puffAngle * Math.PI) / 180) * puffDistance;
            const delay = 0.03 + Math.random() * 0.1;
            const duration = 0.7 + Math.random() * 0.4;
            const rotation = (Math.random() - 0.5) * 60;

            return (
              <div
                key={`${puffKey}-${i}`}
                className="puff-container"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${startX}px)`,
                  top: `calc(50% + ${startY}px)`,
                }}
              >
                <div
                  className="puff-cloud"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    ["--puff-x" as string]: `${puffX}px`,
                    ["--puff-y" as string]: `${puffY}px`,
                    ["--puff-rotate" as string]: `${rotation}deg`,
                    ["--puff-color" as string]: puffColor,
                    animation: `puffCloud ${duration}s ease-out ${delay}s both`,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" style={{ filter: `drop-shadow(0 2px 6px var(--puff-color))` }}>
                    <path d="M18.5 12A5.5 5.5 0 0 0 13 7.5c-.44 0-.86.07-1.26.18C11.36 5.26 9.02 3.5 6.5 4 3.48 4.6 1.5 7.5 2 10.5c.1.52.28 1 .54 1.46A4.5 4.5 0 0 0 6.5 20h12a4.5 4.5 0 0 0 0-8z"/>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sombra estática */}
      <div
        className="category-shadow"
        style={{
          backgroundColor: isActive ? darkenColor(cat.color, 50) : darkenColor(cat.color, 60),
          opacity: 0.25,
          filter: "blur(8px)",
          borderRadius: "20px",
          width: "160px",
          height: "60px",
          position: "absolute",
          bottom: "-6px",
          left: "0",
          zIndex: 0,
          transition: "all 0.3s ease",
        }}
      />

      <div
        className="relative z-10 category-button-wrapper"
        style={{
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <TiltButton
          onClick={handleClick}
          variant="solid"
          width={160}
          height={60}
          elevation={10}
          tilt={2}
          radius={20}
          motion={120}
          surfaceColor={isActive ? cat.color : lightenToWhite(cat.color, 0.92)}
          sideColor={isActive ? darkenColor(cat.color, 30) : darkenColor(cat.color, 50)}
          textColor={isActive ? "#ffffff" : cat.color}
          borderColor={isActive ? "transparent" : cat.color}
          borderWidth={isActive ? 0 : 2}
          className="focus:outline-none"
        >
          <div className="flex items-center gap-2 font-nunito font-bold text-sm whitespace-nowrap">
            {getCategoryIcon(cat.icon, cat.color, isActive)}
            <span>{cat.name}</span>
          </div>
        </TiltButton>
      </div>
    </div>
  );
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryClick = (catId: string) => {
    onCategoryChange(catId);
  };

  return (
    <div className="category-scroll flex gap-3 mb-14 overflow-x-auto py-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-6 scroll-smooth snap-x snap-mandatory">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <CategoryButton
            key={cat.id}
            cat={cat}
            isActive={isActive}
            onClick={() => handleCategoryClick(cat.id)}
          />
        );
      })}
    </div>
  );
}
