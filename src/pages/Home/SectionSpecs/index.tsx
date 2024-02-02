import { ReactNode } from "react";
import { SectionSpecsStyled } from "./styles";
import { CardPrice } from "./components/CardPrice";

export function SectionSpecs(): ReactNode {
   return (
      <SectionSpecsStyled>
         <div className="container-medium">
            <div className="home-specs_heading">

            </div>
            <div className="home-specs_price-block">
               <CardPrice />
            </div>
         </div>
      </SectionSpecsStyled>
   )
}