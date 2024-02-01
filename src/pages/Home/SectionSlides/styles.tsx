import styled from "styled-components";

export const SectionSliderStyled = styled.section`
   padding: 3.5rem 0;
   overflow-x: hidden;

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
      }

      .slide-trailers_control{
         position: absolute;
         z-index: 1;
         top: 6.75rem;
         transform: translateY(-25%);
         transition: all 250ms ease;

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
`