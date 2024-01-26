import { Button } from "../Button";
import { CardOptionStyled } from "./styles";

//assets
import IconHeart from '@/assets/heart.svg'
import IconEdition from '@/assets/icon-edition.svg'

type CardEdition = 'default' | 'deluxe'

interface CardOptionProps {
   edition: CardEdition,
   price: string,
   items: string[]
}

export function CardOption({ edition, price, items }: CardOptionProps) {
   return (
      <CardOptionStyled>
         {
            edition === 'deluxe' &&
            <div className="edition_spacial">
               <span>{`Edição digital ${edition}`}</span>
            </div>
         }
         <div>
            <div className="edition_icons">
               <img className={`edition_icon ${edition}`} src={IconEdition} alt={edition} />
               {
                  edition === 'deluxe' &&
                  <img className={`edition_icon ${edition} is-2`} src={IconEdition} alt={edition} />
               }
            </div>
            <h3 className="edition_title h5">{`Edição ${edition}`}</h3>
         </div>
         <ul>
            {
               items.map((item: string, index: number) => {
                  return (
                     <li key={`${edition}-${index}`}>{item}</li>
                  )
               })
            }
         </ul>
         <div className="edition_footer">
            <h3 className="h5">{`R$ ${price}`}</h3>
            <div className="edition_buttons">
               <Button.Root size="medium" type="primary">
                  <Button.Text size="medium">{'adicionar ao carrinho'}</Button.Text>
               </Button.Root>
               <Button.Root size="medium" type="secondary" circle={true} >
                  <Button.Icon src={IconHeart} alt="favoritar item" size="tiny" />
               </Button.Root>
            </div>
         </div>
      </CardOptionStyled >
   )
}