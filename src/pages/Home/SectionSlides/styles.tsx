import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionSliderStyled = styled.section`
   padding: 3.5rem 0;
   overflow-x: hidden;
   position: relative;

   /* &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(270deg, #060608 -3.29%, rgba(6, 6, 8, 0) 64.25%);
      width: 33.4rem;
      height: 100%;
      z-index: 1;
      pointer-events: none;
   } */

   .container-medium {

      .home-slider_heading{
         margin-bottom: 2rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 2rem;
      }

      .swiper_slide-wrapper{
         overflow: visible !important;
         padding: 0.1875rem;

         .swiper_slide-wrap{
            max-width: 24rem;

            ${breakPoints.tablet}{
               max-width: 90%;
            }
         }

         .slide-trailers_control{
            position: absolute;
            z-index: 2;
            top: 6.75rem;
            transform: translateY(-25%);
            transition: all 250ms ease;

            ${breakPoints.tablet}{
               display: none;
            }

            &.is-01{
               transform: translateX(-25%);
               left: 0;
            }

            &.is-02{
               transform: translateX(25%);
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