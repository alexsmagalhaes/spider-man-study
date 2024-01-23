// ButtonBody.tsx

import { ReactNode } from "react";
import { ButtonBodyStyle, Size, Type } from "./ButtonBody.styles";

export interface ButtonBodyProps {
   children: ReactNode;
   size?: Size;
   type?: Type;
}

export function ButtonBody({ children, size, type }: ButtonBodyProps): JSX.Element {
   return (
      <ButtonBodyStyle size={size} type={type}>
         {children}
      </ButtonBodyStyle>
   );
}
