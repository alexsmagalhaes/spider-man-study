import { ReactNode } from "react";
import { CardStyled } from "./styles";

interface CardBenefitProps {
   icon: string,
   title: string,
   description: string,
}

export function CardBenefit({ icon, title, description }: CardBenefitProps): ReactNode {
   return (
      <CardStyled>
         <img src={icon} alt={description} />
         <h3 className="subhead large">{title}</h3>
         <p>{description}</p>
      </CardStyled>
   )
}