import { ReactNode } from "react"
import { ButtonTextStyles, Size } from "./ButtonText.styles"

interface ButtonTextProps {
   children: ReactNode | string,
   size?: Size,
}

export function ButtonText({ children, size }: ButtonTextProps): JSX.Element {
   return (
      <ButtonTextStyles size={size}>
         {children}
      </ButtonTextStyles>
   )
}

