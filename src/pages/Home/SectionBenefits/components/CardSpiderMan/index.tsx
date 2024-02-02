import { ReactNode } from "react";
import { CardSpiderManStyled } from "./styles";
import { BorderDetail } from "@/components/ui/BorderDetail";
import { Button } from "@/components/ui/Button";

//assets
import ImageCard from '@/assets/benefits-spider.png'
import Logo from '@/assets/logo.svg'

export function CardSpiderMan(): ReactNode {
   return (
      <CardSpiderManStyled>
         <BorderDetail />
         <div className="home-benefit_buy-block">
            <img src={Logo} alt="Logo Spider-man 2" />
            <Button.Root type="secondary" size="small">
               <Button.Text size="small">Comprar</Button.Text>
            </Button.Root>
         </div>
         <div className="home-benefit_filter"></div>
         <img src={ImageCard} alt="Spider-Man" className="spider-man" />
      </CardSpiderManStyled>
   )
}