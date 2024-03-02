import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export type Size = 'default'

export const CardSlideStyled = styled.div`
   will-change: transform;

   .slide_wrap{
      position: relative;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .button-play{
         position: absolute;
         transition: all 250ms ease;
         opacity: 0;
         margin-top: 1.5rem;
         z-index: 1;
         transform: scale(1.25);

         ${breakPoints.tablet}{
            opacity: 1;
            margin-top: 0;
            transform: scale(1);
         }
      }

      .slide_border-detail{
         width: 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         position: absolute;

         ${breakPoints.tablet}{
            display: none;
         }
      }
      
      .filter{
         position: absolute;
         width: 100%;
         height: 100%;
         opacity: 0.8;
         background: linear-gradient(0deg, #060608 -4.17%, rgba(6, 6, 8, 0.00) 100%);
      }

      .thumbnail-image{
         width: 100%;
         height: 28rem;
         object-fit: cover;

         ${breakPoints.tablet}{
            height: 9.75rem;
         }
      }
   }
   
   h3{
      font-size: 1.125rem;
      font-weight: 500;
      font-family: var(--font-body);
      text-transform: none;
      line-height: 1.5;
      margin-left: 0.1875rem;
      color: var(--gray-light-01);
      transition: all 250ms ease;
      

      ${breakPoints.laptop}{
         font-size: 1rem;
      }

      ${breakPoints.tablet}{
         font-size: 0.875rem;
         color: var(--white-default);
      }
   }

   &:hover{

      h3{
         color: var(--white-default);
      }
      .button-play{
         position: absolute;
         opacity: 1;
         margin-top: 0;
      }
   }
`