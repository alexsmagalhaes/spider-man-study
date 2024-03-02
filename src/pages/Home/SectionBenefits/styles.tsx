import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionBenefitsStyled = styled.section`
   padding: 7.5rem 0;
   background-color: var(--gray-dark-01);
   overflow: hidden;

   ${breakPoints.tablet}{
      padding: 3.5rem 0;
   }
   
   .home-benefits_heading{
      margin-bottom: 2.5rem;
      max-width: 21.5rem;

      ${breakPoints.tablet}{
         max-width: none;
         margin-bottom: 1.5rem;
      }
   }

   .home-benefits_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;

      ${breakPoints.laptop}{
         gap: 1rem;
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: repeat(3, 1fr);
      }

      ${breakPoints.tablet}{
         gap: 0.5rem;
         display: flex;
         margin-bottom: 1.5rem;

         div {
            min-width: 90%;
         }
      }
}
`