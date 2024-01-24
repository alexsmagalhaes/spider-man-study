import { ReactNode } from "react";
import { ButtonRootStyle, Size, Type } from "./ButtonRoot.styles";

interface ButtonRootProps {
   children: ReactNode;
   size: Size;
   type: Type;
   circle?: boolean;
}

export function ButtonRoot({ children, size, type, circle }: ButtonRootProps): JSX.Element {
   return (
      <ButtonRootStyle className={`${size} ${type} ${(circle ? 'circle': '') }`} size={size} type={type}>
         {children}
      </ButtonRootStyle>
   );
}