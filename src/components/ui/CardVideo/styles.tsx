import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export type Size = 'medium' | 'large'

export const CardVideoStyled = styled.div`
   color: var(--gray-light-01);
   transition: all 250ms ease;
   will-change: transform; 

   &.large{
      color: var(--white-default);
   }

   div{
      padding: 0.1875rem;
      position: relative;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .filter{
         position: absolute;
         top: 0;
         width: 100%;
         height: 100%;
         opacity: 0.8;
         background: linear-gradient(0deg, #060608 -4.17%, rgba(6, 6, 8, 0.00) 100%);
      }

      .thumbnail-image{
         width: 100%;
         height: 13.5rem;
         object-fit: cover;

         &.large{
            height: 28.5rem;
         }
      }

      .button-play{
         position: absolute;
         transition: all 250ms ease;
         opacity: 0;
         margin-top: 1.5rem;
         z-index: 1;

         ${breakPoints.tablet}{
            opacity: 1;
            margin-top: 0;
         }
      }
      .border-image{
         position: absolute;
         color: var(--white-default);
         z-index: 1;
         opacity: .16;
         transition: all 250ms ease;

         ${breakPoints.tablet}{
            display: none;
         }

         &.large{
            opacity: 1;
         }

         &.corner-1{
            top: -0.1875rem;
            left: -0.1875rem;
         }

         &.corner-2{
            bottom: -0.1875rem;
            left: -0.1875rem;
         }

         &.corner-3{
            top: -0.1875rem;
            right: -0.1875rem;
         }

         &.corner-4{
            bottom: -0.1875rem;
            right: -0.1875rem;
         }
      }
   }
   
   h3{
      font-size: 0.875rem;
      font-weight: 500;
      font-family: var(--font-body);
      text-transform: none;
      line-height: 1.5;
      margin-left: 0.1875rem;

      &.large{
         font-size: 1.125rem;
      }
   }

   &:hover{
      color: var(--white-default);

      .button-play{
         position: absolute;
         opacity: 1;
         margin-top: 0;

         &.large{
            opacity: 0;
         }
      }

      .border-image{
         opacity: 1;
      }
   }
`