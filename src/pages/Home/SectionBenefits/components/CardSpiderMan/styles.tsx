import styled from "styled-components";

//assets
import BgCard from '@/assets/benefits-bg.jpg'
import { breakPoints } from "@/utils/media";

export const CardSpiderManStyled = styled.div`
   position: relative;
   background-image: url(${BgCard});
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   grid-column: 3;
   grid-row: 1;

   ${breakPoints.laptop}{
      grid-column: 2;
      grid-row: 1;
   }

   ${breakPoints.tablet}{
      height: 16rem;
   }

   .home-benefit_filter{
      background: rgba(0,0,10, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
   }

   .home-benefit_buy-block{
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: 3.5rem;
      gap: 1rem;
   }

   .spider-man{
      min-width: 116%;
      bottom: 0;
      left: -15.5%;
      position: absolute;

      ${breakPoints.laptop}{
         min-width: 80%;
         left: auto;
      }

      ${breakPoints.tablet}{
         min-width: auto;
         width: auto;
         max-height: 96%;
         left: auto;
      }
   }
`