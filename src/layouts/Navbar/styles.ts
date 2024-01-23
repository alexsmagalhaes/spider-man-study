import { breakPoints } from "@/utils/breakPoints";
import styled from "styled-components";

export const NavMenu = styled.nav`
   position: fixed;
   width: 100%;
   top: 0;
   padding: 1rem 0;
   background-color: var(--gray-dark-01);
   min-height: 4.5rem;

      a{
         transition: all 250ms ease;

         &:hover{
            opacity: 0.85;
         }
      }

      div{
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 3.75rem;
         
         div{
            display: flex;
            align-items: center;
            gap: 3.75rem;

            ${breakPoints.laptop}{
               display: none;
            }
            
            a{
               font-weight: 500;
               font-size: 0.875rem;
               transition: all 250ms ease;

               &:hover{
                  color: var(--orange-03);
               }
            }
         }
   }
`