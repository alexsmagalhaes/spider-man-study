import { ReactNode } from "react";
import { ButtonIconStyles, SizeIcon } from "./ButtonIcon.styles";

interface ButtonIconProps {
   src: string,
   alt: string,
   size: SizeIcon
}

export function ButtonIcon({ src, alt, size }: ButtonIconProps): ReactNode {
   return (
      <ButtonIconStyles src={src} alt={alt} size={size}/>
   )
}