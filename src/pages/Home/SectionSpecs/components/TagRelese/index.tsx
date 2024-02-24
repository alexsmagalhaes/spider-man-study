import { ReactNode } from "react";
import { TagReleseStyled } from "./styles";

//assets
import PS5 from '@/assets/tag-relese-ps5-icon.svg'
import Arrow from '@/assets/tag-relese-arrow-icon.svg'


export function TagRelese(): ReactNode{
   return(
      <TagReleseStyled>
         <div className="tag-relese_block-logo">
            <img src={PS5} alt="PS5" />
         </div>
         <div className="tag-relese_block-infos">
            <span>Lançado 20/10/2023</span>
            <img src={Arrow} alt="arrow" />
            <span>Versão para PS5</span>
         </div>
      </TagReleseStyled>
   )
}