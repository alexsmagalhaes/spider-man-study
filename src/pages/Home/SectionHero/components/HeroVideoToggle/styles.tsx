import styled from "styled-components";

export const HeroVideoToggleStyled = styled.div`
   position: relative;
   width: 9.25rem;
   height: 6rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 250ms ease;

   .home-hero-toggle_filter{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 250ms ease;
      background: linear-gradient(0deg, rgba(6, 6, 8, .85) 0%, rgba(6, 6, 8, 0.5) 100%);
   }

   .home-hero-toggle_border{
      opacity: 0;
      transition: all 250ms ease;
   }


   .home-hero-toggle_thumb{
      object-fit: cover;
      width: 100%;
      height: 100%;
   }

   &.is-active{
      .home-hero-toggle_filter{
         opacity: 0.4;
      }

      .home-hero-toggle_border{
         opacity: 1;
      }
   }

   &:hover{
      transform: scale(1.025);
   }
`