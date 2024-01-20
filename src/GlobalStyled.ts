import { createGlobalStyle } from "styled-components";
import { breakPoint } from "./media";

export const GlobalStyles = createGlobalStyle`
   :root{

   }
   
   *{
      margin:0%;
      padding: 0;
      box-sizing: border-box;
   }

   html{
      font-size: 1rem;
   }

   body{
      ${breakPoint.tablet}{
         background-color: red;
      }
   }

   img{
      max-width: 100%;
   }
`