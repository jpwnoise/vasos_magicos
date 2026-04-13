"use client";

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

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="category-scroll flex gap-3 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-4 scroll-smooth snap-x snap-mandatory">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const darkerSideColor = darkenColor(cat.color, 40);

        return (
          <TiltButton
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            variant="solid"
            width={160}
            height={60}
            elevation={8}
            tilt={1.5}
            radius={20}
            motion={120}
            surfaceColor={isActive ? cat.color : "#ffffff"}
            sideColor={isActive ? darkenColor(cat.color, 30) : darkerSideColor}
            textColor={isActive ? "#ffffff" : cat.color}
            borderColor={isActive ? "transparent" : cat.color}
            borderWidth={isActive ? 0 : 2}
            className="snap-start shrink-0 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2"
          >
            <div className="flex items-center gap-2 font-nunito font-bold text-sm whitespace-nowrap">
              {getCategoryIcon(cat.icon, cat.color, isActive)}
              <span>{cat.name}</span>
            </div>
          </TiltButton>
        );
      })}
    </div>
  );
}
