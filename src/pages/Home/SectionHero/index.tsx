import { Tag } from "@/components/ui/Tag";
import { SectionHeroStyled } from "./styles";
import { Button } from "@/components/ui/Button";
import { CardVideo } from "@/components/ui/CardVideo";

//assets
import IconHeart from '@/assets/heart.svg'
import ThumbVideo01 from '@/assets/thumb-01.jpg'

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

               <CardVideo thumbnail={ThumbVideo01} title={"titulo"} alt={""} />
            </div>
         </div>
      </SectionHeroStyled>
   )
}