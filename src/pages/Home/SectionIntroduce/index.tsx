import { ReactNode } from "react";
import { SectionIntroduceStyled } from "./styles";

//assets
import IconScroll from "@/assets/icon-scroll.svg"
import IconScrollArrow from "@/assets/icon-scroll-arrow.svg"

export function SectionIntroduce(): ReactNode {
   return (
      <SectionIntroduceStyled>
         <div className="container-medium">
            <div className="home-introduce_heading">
               <h2>O VILÃO MAIS PODEROSO ESTÁ À SOLTA</h2>
               <p>Domine as habilidades dos dois Spiders para derrotá-lo em um combate épico.</p>
               <div className="home-introduce_arrow-wrap">
                  <img
                     className="home-introduce_arrow-body"
                     src={IconScroll}
                     alt="scroll down" />
                  <img
                  className="home-introduce_arrow"
                     src={IconScrollArrow}
                     alt="scroll down" />
               </div>
            </div>
         </div>
         <div className="home-introduce_filter"></div>
      </SectionIntroduceStyled>
   )
}