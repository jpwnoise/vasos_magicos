export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  image?: string;
  colors: string[];
  minQty: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  { id: 'todos', name: 'Todos', icon: 'Star', color: '#b48eff', bgColor: '#f3e8ff' },
  { id: 'vasos-animales', name: 'Animales', icon: 'Heart', color: '#f472b6', bgColor: '#fce7f3' },
  { id: 'vasos-heroes', name: 'Héroes', icon: 'Star', color: '#60a5fa', bgColor: '#dbeafe' },
  { id: 'vasos-princesas', name: 'Princesas', icon: 'Crown', color: '#c084fc', bgColor: '#f3e8ff' },
  { id: 'vasos-espacio', name: 'Espacio', icon: 'Moon', color: '#818cf8', bgColor: '#e0e7ff' },
  { id: 'vasos-naturaleza', name: 'Naturaleza', icon: 'Flower', color: '#4ade80', bgColor: '#dcfce7' },
  { id: 'vasos-deportes', name: 'Deportes', icon: 'Trophy', color: '#fb923c', bgColor: '#ffedd5' },
];

export const products: Product[] = [
  {
    id: 0,
    name: 'Vaso Pony Mágico',
    description: 'Adorable pony rosado con crina arcoíris y brillitos mágicos',
    price: 52,
    category: 'vasos-princesas',
    icon: 'Pony',
    image: '/pony.png',
    colors: ['#fce7f3', '#f3e8ff', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 1,
    name: 'Vaso Dino Feliz',
    description: 'Adorable Dinosaurio, perfecto para fiestas infantiles',
    price: 45,
    category: 'vasos-animales',
    icon: 'Bear',
    image: '/dino.png',
    colors: ['#fce7f3', '#dbeafe', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 2,
    name: 'Vaso Oso Dormido',
    image: '/oso.png',
    description: 'Tierno gatito durmiendo con estrellas brillantes',
    price: 45,
    category: 'vasos-animales',
    icon: 'Cat',
    colors: ['#fef3c7', '#fce7f3', '#e0e7ff'],
    minQty: 10,
  },
  {
    id: 3,
    name: 'Vaso Conejito Saltarín',
    description: 'Conejito saltando entre flores de colores',
    price: 48,
    category: 'vasos-animales',
    icon: 'Rabbit',
    colors: ['#fce7f3', '#dcfce7', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 4,
    name: 'Vaso Superhéroe',
    description: 'Escudo de héroe con rayos y estrellas dinámicas',
    price: 50,
    category: 'vasos-heroes',
    icon: 'Shield',
    image:'/hero_cup.png',
    colors: ['#dbeafe', '#fef3c7', '#fecaca'],
    minQty: 10,
  },
  {
    id: 5,
    name: 'Vaso Capitán Estrella',
    description: 'Estrella brillante con capa de superhéroe',
    price: 50,
    category: 'vasos-heroes',
    icon: 'Star',
    colors: ['#dbeafe', '#fef3c7', '#e0e7ff'],
    minQty: 10,
  },
  {
    id: 6,
    name: 'Vaso Princesa Encantada',
    description: 'Corona real con corazones y destellos mágicos',
    price: 52,
    category: 'vasos-princesas',
    icon: 'Crown',
    colors: ['#fce7f3', '#f3e8ff', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 7,
    name: 'Vaso Castillo Mágico',
    description: 'Castillo de princesa con torres y banderitas',
    price: 55,
    category: 'vasos-princesas',
    icon: 'Castle',
    colors: ['#f3e8ff', '#dbeafe', '#fce7f3'],
    minQty: 10,
  },
  {
    id: 8,
    name: 'Vaso Cohete Espacial',
    description: 'Cohete viajando entre planetas y estrellas',
    price: 52,
    category: 'vasos-espacio',
    icon: 'Rocket',
    colors: ['#e0e7ff', '#fef3c7', '#dbeafe'],
    minQty: 10,
  },
  {
    id: 9,
    name: 'Vaso Luna y Estrellas',
    description: 'Luna sonriente rodeada de estrellas brillantes',
    price: 48,
    category: 'vasos-espacio',
    icon: 'Moon',
    colors: ['#fef3c7', '#e0e7ff', '#fce7f3'],
    minQty: 10,
  },
  {
    id: 10,
    name: 'Vaso Arcoíris',
    description: 'Arcoíris con nubes y gotitas de colores',
    price: 45,
    category: 'vasos-naturaleza',
    icon: 'Rainbow',
    colors: ['#dbeafe', '#fce7f3', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 11,
    name: 'Vaso Mariposa Mágica',
    description: 'Mariposa con alas de colores y flores',
    price: 48,
    category: 'vasos-naturaleza',
    icon: 'Butterfly',
    colors: ['#fce7f3', '#dcfce7', '#e0e7ff'],
    minQty: 10,
  },
  {
    id: 12,
    name: 'Vaso Flor Primavera',
    description: 'Flores de primavera con pétalos de colores',
    price: 45,
    category: 'vasos-naturaleza',
    icon: 'Flower',
    colors: ['#fce7f3', '#fef3c7', '#dcfce7'],
    minQty: 10,
  },
  {
    id: 13,
    name: 'Vaso Fútbol Divertido',
    description: 'Balón de fútbol con estrellas y confeti',
    price: 50,
    category: 'vasos-deportes',
    icon: 'Soccer',
    colors: ['#dcfce7', '#dbeafe', '#fef3c7'],
    minQty: 10,
  },
  {
    id: 14,
    name: 'Vaso Copa Campeón',
    description: 'Copa dorada con medalla y laureles',
    price: 52,
    category: 'vasos-deportes',
    icon: 'Trophy',
    colors: ['#fef3c7', '#fef9c3', '#dcfce7'],
    minQty: 10,
  },
];
