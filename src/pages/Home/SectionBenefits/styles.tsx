import styled from "styled-components";

export const SectionBenefitsStyled = styled.section`
   padding: 7.5rem 0;
   background-color: var(--gray-dark-01);
   
   .home-benefits_heading{
      margin-bottom: 2.5rem;
      max-width: 21.5rem;
   }

   .home-benefits_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
}
`