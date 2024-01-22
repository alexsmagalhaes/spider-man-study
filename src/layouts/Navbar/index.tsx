import { ReactNode } from "react";
import { NavMenu } from "./styles";

import Logo from '@/assets/logo.svg'

interface linkProps {
   text: string,
   link: string,
}

const links: linkProps[] = [
   {
      text: "Visão geral",
      link: "#"
   }, {
      text: "Edições",
      link: "#"
   }, {
      text: "Características",
      link: "#"
   }, {
      text: "Gameplay",
      link: "#"
   }
]
function Navbar(): ReactNode {
   return (
      <NavMenu>
         <div className="container-medium">
            <a href="./">
               <img src={Logo} alt="Logo" />
            </a>
            <div>
               {
                  links.map(({ text, link }: linkProps, index: number) => {
                     return (
                        <a key={`nav-link-${index}`} href={link}>{text}</a>
                     )
                  })
               }
            </div>
         </div>
      </NavMenu>
   )
}

export default Navbar;