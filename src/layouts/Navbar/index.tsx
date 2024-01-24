import { ReactNode, useEffect, useState } from "react";
import { NavMenu } from "./styles";
import { Button } from "@/components/ui/Button";
import { screenWidth } from "@/utils/breakPoints";
import { Link } from "react-router-dom";

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

      return () => {
         window.removeEventListener("resize", updateComponents)
      }
   }, [])

   return (
      <NavMenu>
         <div className="container-medium">
            <Link to="./">
               <img src={Logo} alt="Logo" />
            </Link>
            <div>
               {
                  links.map(({ text, link }: linkProps, index: number) => {
                     return (
                        <Link key={index} to={link}>{text}</Link>
                     )
                  })
               }
            </div>
            <Button.Root size="small" type="secondary">
               <Button.Text size="small">{buttonText}</Button.Text>
            </Button.Root>
         </div>
      </NavMenu>
   )
}

export default Navbar;