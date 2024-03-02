import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionGameplayStyled = styled.section`
   padding-bottom: 7.5rem;
   overflow-x: hidden;
   background-color: var(--gray-dark-01);

   ${breakPoints.tablet}{
      padding-top: 1.5rem;
      padding-bottom: 4rem;
   }

   .container-medium{

      .home-gameplay_heading {
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 4rem;

         ${breakPoints.tablet}{
            margin-bottom: 2rem;
         }

         h2{
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
         }

         p{
            color: var(--gray-light-03);
            font-size: 1.125rem;
            
            ${breakPoints.tablet}{
               font-size: 1rem;
            }
         }
      }

      .swiper-gameplay_slide{
         overflow: visible;
         max-width: 50rem;
         position: relative;

         ${breakPoints.tablet}{
            max-width: 88%;
         }

         .swiper-gameplay-pagination{
            position: absolute;
            right: 0;
            bottom: 0.625rem;
            z-index: 1;

            ${breakPoints.tablet}{
               display: none;
            }
         }

         .slide-gameplay_control{
            position: absolute;
            z-index: 1;
            top: 12.25rem;
            transform: translateY(-25%);
            transition: all 250ms ease;

            ${breakPoints.tablet}{
               display: none;
            }

            &.is-01{
               transform: translateX(-50%);
               left: 0;
            }

            &.is-02{
               transform: translateX(50%);
               right: 0;
            }

            &.disable{
               opacity: 0;
               pointer-events: none;
         }
      }
      }
   }
`