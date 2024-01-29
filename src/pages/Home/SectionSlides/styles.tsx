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

   .home-slider_pagination-wrap{
      position: relative;
      z-index: 100;
      width: 100px;
      height: 100px;

      span{
         width: 10px !important;
         height: 10px;
         
      }
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

         &.is-01{
            transform: translateX(-25%);
            left: 0;
         }

         &.is-02{
            transform: translateX(25%);
            right: 0;
         }
      }
   }
`