import { ReactNode } from "react";
import { HeroVideoToggleStyled } from "./styles";
import { BorderDetail } from "@/components/ui/BorderDetail";

interface HeroVideoToggleProps {
   thumbnail: string,
   alt: string,
   active: string,
   onClick: () => void,
}

export function HeroVideoToggle({ thumbnail, alt, active, onClick }: HeroVideoToggleProps): ReactNode {

   return (
      <HeroVideoToggleStyled className={active} onClick={onClick}>
         <div className="home-hero-toggle_filter"></div>
         <BorderDetail className="home-hero-toggle_border" />
         <img className="home-hero-toggle_thumb" src={thumbnail} alt={alt} />
      </HeroVideoToggleStyled>
   )
}