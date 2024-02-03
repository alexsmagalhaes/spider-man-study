import { ReactNode } from "react";
import { BorderDetailStyled } from "./styles";

//assets
import IconCorner01 from "@/assets/border-1.svg"
import IconCorner02 from "@/assets/border-2.svg"
import IconCorner03 from "@/assets/border-3.svg"
import IconCorner04 from "@/assets/border-4.svg"

interface BorderDetailProps {
   className?: string,
}

export function BorderDetail({ className }: BorderDetailProps): ReactNode {
   return (
      <BorderDetailStyled className={className}>
         <img className={`border-image corner-1`} src={IconCorner01} alt="border video" />
         <img className={`border-image corner-2`} src={IconCorner02} alt="border video" />
         <img className={`border-image corner-3`} src={IconCorner03} alt="border video" />
         <img className={`border-image corner-4`} src={IconCorner04} alt="border video" />
      </BorderDetailStyled>
   )
}