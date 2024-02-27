
import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const NavMenu = styled.nav`
   position: sticky;
   width: 100%;
   top: 0;
   padding: 1rem 0;
   background-color: var(--gray-dark-01);
   min-height: 4.5rem;
   z-index: 999;
   
   .container-medium{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 3.75rem;

      ${breakPoints.laptop}{
            gap: 1.75rem;
      }
      
      .navbar_logo-link{
         transition: all 250ms ease;
   
         &:hover{
            opacity: 0.85;
         }
      }
      .navbar_links-menu{
         display: flex;
         align-items: center;
         gap: 3.75rem;

         ${breakPoints.laptop}{
            gap: 1.75rem;
         }
         
         ${breakPoints.tablet}{
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