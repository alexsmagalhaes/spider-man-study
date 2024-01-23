import { ReactNode } from "react";
import { FooterStyled } from "./styles";

//assets
import Logo from "@/assets/design-boost.svg"
import Line from "@/assets/line.svg"

export default function Footer(): ReactNode {
   return (
      <FooterStyled>
         <div className="container-medium footer_container">
            <img src={Line} alt="" className="footer_line"/>

            <div className="footer_content">
               <span className="subhead medium">©codeboost2024</span>
               <p>Este conteúdo destina-se exclusivamente a fins educacionais e não será utilizado para fins comerciais. Todas as imagens e marcas registradas são de propriedade de seus respectivos detentores de direitos autorais. O uso deste material busca promover a educação e o conhecimento.</p>
            </div>
            <div className="footer_credits">
               <span>Design by </span>
               <a href="https://www.designboost.com.br/">
                  <img src={Logo} alt="logo codeBoost e designBoost" />
               </a>
            </div>
         </div>
      </FooterStyled>
   )
}