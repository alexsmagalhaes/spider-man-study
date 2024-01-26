import { Tag } from "@/components/ui/Tag";
import { SectionHeroStyled } from "./styles";
import { Button } from "@/components/ui/Button";
import { CardVideo } from "@/components/ui/CardVideo";
import { CardBenefit } from "@/components/ui/CardBenefit";
import { CardOption } from "@/components/ui/CardOption";

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

               <CardVideo thumbnail={ThumbVideo01} title={"titulo"} alt={""} size={"medium"} />
               <CardBenefit
                  icon={IconBenefit01}
                  title="Visual incrível"
                  description="Explore novos cenários deslumbrantes como os bairros do Queens e do Brooklyn nessa Nova York da Marvel que ganha vida de maneira espetacular."
               />
               <CardOption edition="default" price="349,90" items={['Marvel’s Spider-Man 2', ]}/>
            </div>
         </div>
      </SectionHeroStyled>
   )
}