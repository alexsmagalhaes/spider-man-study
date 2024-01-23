import { ReactNode, useEffect, useState } from "react";
import { NavMenu } from "./styles";
import { Button } from "@/components/ui/Button";
import { screenWidth } from "@/utils/breakPoints";

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

   const [buttonText, setButtonText] = useState("");

   function updateComponents() {
      window.innerWidth > screenWidth.tablet ? setButtonText("Adicionar ao carrinho") : setButtonText("Comprar")
   }

   useEffect(() => {
      updateComponents();
      window.addEventListener("resize", updateComponents);
   }, [])

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
               <Button.Text size="small">{buttonText}</Button.Text>
            </Button.Body>
         </div>
      </NavMenu>
   )
}

export default Navbar;