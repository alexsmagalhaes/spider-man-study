import styled from "styled-components";

export const CardStyled = styled.div`
   display: flex;
   padding: 2rem;
   flex-direction: column;
   gap: 1rem;
   border: 1.5px solid var(--gray-dark-03);

   img{
      width: 4.75rem;
      height: 4.75rem;
   }

   p{
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--gray-light-02);
   }

`