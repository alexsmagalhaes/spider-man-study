import styled from "styled-components";

export const TagStyled = styled.div`
   display: flex;
   align-items: stretch;
   font-size: 0.75rem;
   border-radius: 0.25rem;

   .tag_main{
      background-color: var(--gray-dark-03);
      color: var(--gray-light-01);
      font-weight: 400;
      padding: 0.375rem 0.75rem;
   }

   .tag_auxiliar{
      background-color: var(--gray-dark-04);
      color: var(--white-default);
      font-weight: 500;
      padding: 0.375rem 0.75rem;
   }
`