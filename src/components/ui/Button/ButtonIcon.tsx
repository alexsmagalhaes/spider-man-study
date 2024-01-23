import { ReactNode } from "react";
import { ButtonIconStyles } from "./ButtonIcon.styles";

interface ButtonIconProps {
   src: string,
   alt: string,
}

export function ButtonIcon({ src, alt }: ButtonIconProps): ReactNode {
   return (
      <ButtonIconStyles src={src} alt={alt} />
   )
}