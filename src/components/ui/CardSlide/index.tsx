import { ReactNode } from "react";
import { CardSlideStyled } from "./styles";
import { BorderDetail } from "../BorderDetail";

interface CardSlideProps {
   image: string,
   alt: string,
   title: string,
}

export function CardSlide({ image, alt, title }: CardSlideProps): ReactNode {
   return (
      <CardSlideStyled>
         <div className="slide_wrap">
            <BorderDetail />
            <img className={`thumbnail-image`} src={image} alt={alt} />
            <div className="filter"></div>
         </div>
         <h3>{title}</h3>
      </CardSlideStyled>
   )
}