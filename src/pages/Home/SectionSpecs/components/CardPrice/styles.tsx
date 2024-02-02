import styled from "styled-components";

export const CardPriceStyled = styled.div`
   padding: 2.25rem 2.5rem;
   border: 0.0938rem solid var(--gray-dark-05);
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 3rem;

   .price-card_heading{
      width: 100%;

      h3{
         margin-top: 1.5rem;
         margin-bottom: 1rem;
      }

      p{
         font-size: 1.125rem;
         color: var(--gray-light-03);
      }
   }

   .price-card_footer {
      width: 100%;

      .price-card_buttons {
         margin-top: 1.5rem;
         display: flex;
         align-items: flex-start;
         gap: 1.375rem;  
      }
   }
`