import { ReactNode } from "react";
import { CardVideoStyled } from "./styles";

//assets
import IconPlay from "@/assets/play.svg"
import IconCorner01 from "@/assets/border-1.svg"
import IconCorner02 from "@/assets/border-2.svg"
import IconCorner03 from "@/assets/border-3.svg"
import IconCorner04 from "@/assets/border-4.svg"

interface CardVideoProps {
   video?: string,
   thumbnail: string,
   alt: string,
   title: string,
}

export function CardVideo({ video, thumbnail, alt, title }: CardVideoProps): ReactNode {
   return (
      <CardVideoStyled>
         <div>
            <img className="thumbnail-image" src={thumbnail} alt="" />
            <img className="button-play" src={IconPlay} alt="play video" />
            <div className="filter"></div>

            <img className="border-image corner-1" src={IconCorner01} alt="border video" />
            <img className="border-image corner-2" src={IconCorner02} alt="border video" />
            <img className="border-image corner-3" src={IconCorner03} alt="border video" />
            <img className="border-image corner-4" src={IconCorner04} alt="border video" />
         </div>
         <h3>{title}</h3>
      </CardVideoStyled>
   )
}