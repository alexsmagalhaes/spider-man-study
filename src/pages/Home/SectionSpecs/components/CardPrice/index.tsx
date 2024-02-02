import { ReactNode } from "react";
import { CardPriceStyled } from "./styles";
import { BorderDetail } from "@/components/ui/BorderDetail";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

//assets
import IconHeart from '@/assets/heart.svg'

export function CardPrice(): ReactNode {
   return (
      <CardPriceStyled>
         <div className="price-card_heading">
            <Tag textBase="Disponível para" textAuxiliar="PS5" />
            <h3>Marvel's Spider-Man 2</h3>
            <p>Sony Interactive Entertainment</p>
         </div>
         <div className="price-card_footer">
            <span className="h4">R$ 349,90</span>
            <div className="price-card_buttons">
               <Button.Root size="medium" type="primary">
                  <Button.Text size="medium">{'adicionar ao carrinho'}</Button.Text>
               </Button.Root>
               <Button.Root size="medium" type="secondary" circle={true} >
                  <Button.Icon src={IconHeart} alt="favoritar item" size="tiny" />
               </Button.Root>
            </div>
         </div>
         <BorderDetail />
      </CardPriceStyled>
   )
}