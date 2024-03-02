import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionEditionsStyled = styled.section`
   padding: 7rem 0rem;
   background-color: var(--gray-dark-01);

   ${breakPoints.tablet}{
      padding: 3.5rem 0rem 0rem 0rem;
   }

   .container-medium{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 0rem;

      ${breakPoints.laptop}{
         gap: 1rem;
      }

      ${breakPoints.tablet}{
         display: flex;
         flex-direction: column;
         gap: 2rem;

         div:nth-child(3){
            margin-top: 1.5rem;
         }
      }

      h2{
         margin-top: 2rem;
         margin-bottom: 1rem;

         ${breakPoints.tablet}{
            margin-top: 1.5rem;
         }
      }

      .subhead{
         margin-bottom: 2rem;
         color: var(--gray-light-01);
      }

      .home-edition_detail{
         display: flex;
         gap:0.625rem;
         margin-bottom: 4rem;

         ${breakPoints.tablet}{
            display: none;
         }
      }

      .home-edition_spiders-wrap{
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;

         .home-edition_image-filter{
            background: linear-gradient(180deg, rgba(6,6,8,0) 0%, rgba(6,6,8,0.72) 100%);
            width: 100%;
            height: 100%;
            position: absolute;
         }

         .home-edition_image{
            object-fit: cover;
            width: 100%;
         }
      }
   }
`