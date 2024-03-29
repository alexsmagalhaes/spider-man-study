
import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const FooterStyled = styled.nav`
   background-color: var(--gray-dark-01);
   overflow-x: hidden;

   .footer_container{
      padding-top: 6rem;
      padding-bottom: 4.5rem;
      position: relative;
      display: flex;
      gap: 3.75rem;
      align-items: end;
      justify-content: space-between;

      ${breakPoints.laptop}{
         gap: 1.5rem;
      }

      ${breakPoints.tablet}{
         flex-direction: column;
         align-items: start;
         padding-top: 3rem;
         padding-bottom: 3rem;
         gap: 3rem;
      }
      
      .footer_line{
         position: absolute;
         top: 0;
         max-width: 100%;
         right: 1.5rem;
         left: 1.5rem;
         /* min-width: 68rem; */

         ${breakPoints.tablet}{
            display: none;
         }
      }

      .footer_content{
         max-width: 40.25rem;
         display: flex;
         flex-direction: column;
         gap: 0.75rem;
         align-items: start;

         /* ${breakPoints.laptop}{
            align-items: center;
         } */

         p{
            color: var(--gray-light-02);
            font-size: 0.875rem;
         }
      }

      .footer_credits{
         display: flex;
         gap: 1.5rem;
         align-items: center;

         span{
            font-size: 0.75rem;
            font-weight: 500;
            white-space: nowrap;
         }

         a{
            transition: all 250ms ease;

            &:hover{
               opacity: 0.85;
            }

            img{
               min-width: 7.625rem;
            }
         }
      }
   }
`