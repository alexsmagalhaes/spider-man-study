import { ReactNode } from "react";
import { CardVideoStyled, Size } from "./styles";

//assets
import IconPlay from "@/assets/play.svg"
import IconCorner01 from "@/assets/border-1.svg"
import IconCorner02 from "@/assets/border-2.svg"
import IconCorner03 from "@/assets/border-3.svg"
import IconCorner04 from "@/assets/border-4.svg"

interface CardVideoProps {
  // //video?: string,
   thumbnail: string,
   alt: string,
   title: string,
   size?: Size
}

export function CardVideo({ /*video,*/ thumbnail, alt, title, size }: CardVideoProps): ReactNode {
   return (
      <CardVideoStyled className={`${size}`}>
         <div>
            <img className={`thumbnail-image ${size}`} src={thumbnail} alt={alt} />
            <img className={`button-play ${size}`} src={IconPlay} alt="play video" />
            <div className="filter"></div>

            <img className={`border-image corner-1 ${size}`}  src={IconCorner01} alt="border video" />
            <img className={`border-image corner-2 ${size}`} src={IconCorner02} alt="border video" />
            <img className={`border-image corner-3 ${size}`} src={IconCorner03} alt="border video" />
            <img className={`border-image corner-4 ${size}`} src={IconCorner04} alt="border video" />
         </div>
         <h3 className={`${size}`}>{title}</h3>
      </CardVideoStyled>
   )
}