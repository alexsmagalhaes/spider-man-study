import { ReactNode } from "react";
import { CardSpiderManStyled } from "./styles";
import { BorderDetail } from "@/components/ui/BorderDetail";

//assets
import ImageCard from '@/assets/benefits-spider.png'

export function CardSpiderMan(): ReactNode {
   return (
      <CardSpiderManStyled>
         <BorderDetail />
         <img src={ImageCard} alt="Spider-Man" className="spider-man" />
      </CardSpiderManStyled>
   )
}