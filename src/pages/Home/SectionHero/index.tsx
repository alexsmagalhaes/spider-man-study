import { Tag } from "@/components/ui/Tag";
import { SectionHeroStyled } from "./styles";
import { Button } from "@/components/ui/Button";

//assets
import IconHeart from '@/assets/heart.svg'

export function SectionHero() {
   return (
      <SectionHeroStyled>
         <div className="container-medium">
            <Tag textBase="Disponível para" textAuxiliar="PS5" />
            <Button.Root size="small" type="secondary" circle={true} >
               <Button.Icon src={IconHeart} alt="favoritar item" size="small"/>
            </Button.Root>
         </div>
      </SectionHeroStyled>
   )
}