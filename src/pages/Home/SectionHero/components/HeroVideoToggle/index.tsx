import { ReactNode } from "react";
import { HeroVideoToggleStyled } from "./styles";
import { BorderDetail } from "@/components/ui/BorderDetail";

interface HeroVideoToggleProps {
   thumbnail: string,
   alt: string,
   active: boolean
}

export function HeroVideoToggle({ thumbnail, alt, active }: HeroVideoToggleProps): ReactNode {
   return (
      <HeroVideoToggleStyled className={active ? 'is-active' : ''}>
         <div className="home-hero-toggle_filter"></div>
         <BorderDetail className="home-hero-toggle_border"/>
         <img className="home-hero-toggle_thumb" src={thumbnail} alt={alt} />
      </HeroVideoToggleStyled>
   )
}