import { ReactNode } from "react";
import { SectionBenefitsStyled } from "./styles";
import { CardBenefit } from "@/components/ui/CardBenefit";

//assets
import IconBenefit01 from "@/assets/benefit-icon-1.svg"
import IconBenefit02 from "@/assets/benefit-icon-2.svg"
import IconBenefit03 from "@/assets/benefit-icon-3.svg"
import IconBenefit04 from "@/assets/benefit-icon-4.svg"
import IconBenefit05 from "@/assets/benefit-icon-5.svg"

interface benefitsItem {
   icon: string,
   title: string,
   description: string
}

const benefitsItems: benefitsItem[] = [
   {
      icon: IconBenefit01,
      title: 'Visual incrível',
      description: 'Explore novos cenários deslumbrantes como os bairros do Queens e do Brooklyn nessa Nova York da Marvel que ganha vida de maneira espetacular.'
   }, {
      icon: IconBenefit02,
      title: 'Gatilhos adaptáveist',
      description: 'Domine movimentos acrobáticos, execute combos eletrizantes e vivencie toda a empolgação estonteante de se balançar com as teias por meio dos gatilhos adaptáveis do controle sem fio.'
   }, {
      icon: IconBenefit03,
      title: 'Tempest 3D AudioTech',
      description: 'Experimente toda a imersão na Nova York da Marvel com a ambientação sonora única que o áudio espacial em 3D proporciona. Identifique os sons de teias, poderes bioelétricos e muito mais.'
   }, {
      icon: IconBenefit04,
      title: 'Resposta tátil',
      description: 'Sinta o poder do Spider-Man! As vibrações adaptáveis do controle sem fio DualSense™ colocam as habilidades de simbionte do Peter e a bioeletricidade do Miles na ponta dos seus dedos.'
   }, {
      icon: IconBenefit05,
      title: 'SSD de velocidade ultra-alta',
      description: 'Sinta o poder do console PS5 com tempos de carregamento extremamente rápidos que permitem a você trocar de personagem quase instantaneamente nas diferentes partes da cidade.'
   }
].reverse()

export function SectionBenefits(): ReactNode {
   return (
      <SectionBenefitsStyled>
         <div className="container-medium">
            <div className="home-benefits_heading">
               <h2 className="h3">características de um jogo único</h2>
            </div>
            <div className="home-benefits_grid">
               {/* component */}
               {
                  benefitsItems.map(({ icon, title, description }: benefitsItem, index: number) => {
                     return (
                        <CardBenefit
                           key={`Benefit-${index}`}
                           icon={icon}
                           title={title}
                           description={description}
                        />
                     )
                  })
               }
            </div>
         </div>
      </SectionBenefitsStyled>
   )
}