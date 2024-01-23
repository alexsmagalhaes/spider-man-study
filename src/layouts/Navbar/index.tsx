import { ReactNode } from "react";
import { NavMenu } from "./styles";

import Logo from '@/assets/logo.svg'
import { Button } from "@/components/ui/Button";

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
            <Button.Body size="small" type="secondary">
               <Button.Text size="small">Adicionar ao carrinho</Button.Text>
            </Button.Body>
         </div>
      </NavMenu>
   )
}

export default Navbar;