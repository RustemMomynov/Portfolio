import { theme } from "./Theme";

type FontPropsType = {
  family?: string;
  color?: string;
  weight?: number;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const getFont = ({
  Fmin,
  Fmax,
  family,
  color,
  weight,
  lineHeight,
}: FontPropsType) =>
  `font-family: ${family || "Poppins"}; 
   font-weight: ${weight || 400};
   color: ${color || theme.colors.font};
   line-height: ${lineHeight || 1.2};
   font-size: 
   calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
   `;
