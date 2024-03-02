import { ReactNode } from "react";
import { SectionSpecsStyled } from "./styles";
import { CardPrice } from "./components/CardPrice";
import { TagRelese } from "./components/TagRelese";

//assets
import SpiderManImage from '@/assets/specs-spider-image.jpg'
import Logo from '@/assets/logo-vertical.svg'

interface specsItemsProps {
   title: string,
   info: string,
}

const specsItems: specsItemsProps[] = [
   { title: "Plataforma", info: "PS5" },
   { title: "Lançamento", info: "20/10/2023" },
   { title: "Distribuidora", info: "Sony Interactive Entertainment" },
   { title: "Gênero", info: "Ação" },
   { title: "Voz", info: "Espanhol (México), Francês (França), Inglês, Português (Brasil)" },
   { title: "Idiomas da tela", info: "Espanhol (México), Francês (França), Inglês, Português (Brasil)" }
]

export function SectionSpecs(): ReactNode {
   return (
      <SectionSpecsStyled>
         <div className="container-medium">
            <div className="home-specs_heading">
               <h2 className="h4">Informações Gerais</h2>
               <div className="home-specs_heading-list">
                  {
                     specsItems.map(({ title, info }: specsItemsProps, index: number) => {
                        return (
                           <div key={`Specs-${index}`} className="home-specs_heading-list-row">
                              <div className="home-specs_heading-col-1">{title}: </div>
                              <div className="home-specs_heading-col-2">{info}</div>
                           </div>
                        )
                     })
                  }
               </div>
               <TagRelese />
            </div>
            <div className="home-specs_price-block">
               <CardPrice />
               <div className="home-specs_card-spider">
                  <img className="home-specs_card-spider-image" src={SpiderManImage} alt="spider-man" />
                  {/* <div className="home-specs_card-spider-filter"></div> */}
                  <img className="home-specs_card-spider-logo" src={Logo} alt="spider-man logo" />
               </div>
            </div>
         </div>
      </SectionSpecsStyled>
   )
}