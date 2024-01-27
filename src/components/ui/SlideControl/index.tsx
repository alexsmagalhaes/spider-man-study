import { ReactNode } from "react";
import { SlideControlStyled } from "./styles";

interface SlideControlProps {
   reverse?: boolean,
}

export function SlideControl({ reverse }: SlideControlProps): ReactNode {
   return (
      <SlideControlStyled className={reverse ? 'reverse' : ''}>
         <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
            <path d="M8 1L1.5 7.5L8 14" stroke="currentColor" stroke-width="1.5" />
         </svg>
      </SlideControlStyled>
   )
}