import { ReactNode } from "react";
import { DividerBlockStyled } from "./styles";

interface DividerBlockProps {
   image: string,
   reverseX?: boolean,
   reverseY?: boolean,
}

export function DividerBlock({ image, reverseX, reverseY }: DividerBlockProps): ReactNode {
   return (
      <DividerBlockStyled>
         <div className="container-medium">
            <img
               src={image}
               alt="divider"
               className={
                  `${(reverseX ? "reverse-x" : "")}
               ${(reverseY ? "reverse-y" : "")}`
               } />
         </div>
      </DividerBlockStyled>
   )
}