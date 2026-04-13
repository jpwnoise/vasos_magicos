declare module 'react-tilt-button' {
  import { ButtonHTMLAttributes } from 'react';

  interface TiltButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: 'solid' | 'outline' | 'arcade' | 'carbon' | 'warning';
    width?: number | string;
    height?: number | string;
    elevation?: number;
    pressInset?: number;
    tilt?: number;
    pressTilt?: boolean;
    radius?: number;
    motion?: number;
    surfaceColor?: string;
    sideColor?: string;
    textColor?: string;
    borderColor?: string;
    borderWidth?: number;
    glareColor?: string;
    glareOpacity?: number;
    glareWidth?: number;
    className?: string;
    style?: React.CSSProperties;
  }

  export function TiltButton(props: TiltButtonProps): JSX.Element;
}
