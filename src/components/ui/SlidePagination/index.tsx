import { ReactNode } from "react";
import { SlidePaginationStyled } from "./styles";

interface SlidePaginationProps {
   className: string
}

export function SlidePagination({ className }: SlidePaginationProps): ReactNode {
   return (
      <SlidePaginationStyled className={className}/>
   )
}