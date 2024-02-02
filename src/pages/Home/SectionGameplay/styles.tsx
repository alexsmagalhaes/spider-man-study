import styled from "styled-components";

export const SectionGameplayStyled = styled.section`
   padding-bottom: 7.5rem;
   overflow-x: hidden;

   div{
      .home-gameplay_heading {
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 4rem;

         h2{
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
         }

         p{
            color: var(--gray-light-03);
            font-size: 1.125rem;
         }
      }

      .swiper-gameplay_slide{
         overflow: visible;
         max-width: 50rem;
         position: relative;

         .swiper-gameplay-pagination{
            position: absolute;
            right: 0;
            bottom: 0.625rem;
            z-index: 1;
         }

         .slide-gameplay_control{
         position: absolute;
         z-index: 1;
         top: 12.25rem;
         transform: translateY(-25%);
         transition: all 250ms ease;

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