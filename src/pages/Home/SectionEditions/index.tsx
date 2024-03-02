import { ReactNode } from "react";
import { SectionEditionsStyled } from "./styles";
import { CardOption } from "@/components/ui/CardOption";
import { Tag } from "@/components/ui/Tag";
import { BorderDetail } from "@/components/ui/BorderDetail";

//assets
import IconLine from "@/assets/edition-line.svg";
import ImageCover from "@/assets/edition-spiders-cover.jpg";

interface listBenefitsProps {
   edition: string,
   values: string[]
}

const listBenefits: listBenefitsProps[] = [
   {
      edition: 'default',
      values: ['Marvel’s Spider-Man 2'],
   }, {
      edition: 'deluxe',
      values: [
         'Marvel’s Spider-Man 2',
         'Cinco trajes exclusivos para o Peter.',
         'Cinco trajes exclusivos para o Miles.',
         'Itens adicionais no Modo Foto',
         '5 Pontos de Técnica.',
         'Desbloqueio de trajes e dispositivos'
      ],
   }
]


export function SectionEditions(): ReactNode {
   return (
      <SectionEditionsStyled>
         <div className="container-medium">
            <div className="home-edition_block">
               <div>
                  <Tag textBase="Edição disponível" />
                  <h2 className="h3">Disponível na playstation store</h2>
                  <h3 className="subhead large">SEJAM MELHORES. JUNTOS.</h3>
                  <div className="home-edition_detail">
                     {[...Array(9)].map((_, index) => (
                        <img key={`Home-detail-${index}`} src={IconLine} alt="detail" />
                     ))}
                  </div>
               </div>
               <div className="home-edition_spiders-wrap">
                  <div className="home-edition_image-filter"></div>
                  <img className="home-edition_image" src={ImageCover} alt="edições do jogo" />
                  <BorderDetail />
               </div>
            </div>
            <CardOption edition={"default"} price={"349,90"} items={listBenefits[0].values} />
            <div className="home-edition_deluxe"><CardOption edition={"deluxe"} price={"399,50"} items={listBenefits[1].values} /></div>
         </div>
      </SectionEditionsStyled>
   )
}