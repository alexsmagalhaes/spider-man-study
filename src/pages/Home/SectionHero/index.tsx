import { Tag } from "@/components/ui/Tag";
import { SectionHeroStyled } from "./styles";
import { Button } from "@/components/ui/Button";
import { CardBenefit } from "@/components/ui/CardBenefit";
import { CardOption } from "@/components/ui/CardOption";
import { CardSlide } from "@/components/ui/CardSlide";

//assets
import IconHeart from '@/assets/heart.svg'
import ThumbVideo01 from '@/assets/thumb-01.jpg'
import IconBenefit01 from '@/assets/benefit-icon-1.svg'

export function SectionHero() {
   return (
      <SectionHeroStyled>
         <div className="container-medium">
            <Tag textBase="Disponível para" textAuxiliar="PS5" />
            <div>
               <Button.Root size="large" type="primary">
                  <Button.Text size="medium">Adicionar ao carrinho</Button.Text>
               </Button.Root>
               <Button.Root size="large" type="secondary" circle={true} >
                  <Button.Icon src={IconHeart} alt="favoritar item" size="tiny" />
               </Button.Root>

              
               <CardBenefit
                  icon={IconBenefit01}
                  title="Visual incrível"
                  description="Explore novos cenários deslumbrantes como os bairros do Queens e do Brooklyn nessa Nova York da Marvel que ganha vida de maneira espetacular."
               />
               <CardOption edition="default" price="349,90" items={['Marvel’s Spider-Man 2', ]}/>
               <CardSlide image={ThumbVideo01} alt={"qq"} title={"Titulo do slide"} />
            </div>
         </div>
      </SectionHeroStyled>
   )
}