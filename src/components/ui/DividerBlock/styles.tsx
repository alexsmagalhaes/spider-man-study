import styled from "styled-components";

export const DividerBlockStyled = styled.div`
   background-color: var(--gray-dark-01);
   
   img{
      width: 100%;

      &.reverse-x{
         transform: scaleX(-1);
      }

      &.reverse-y{
         transform: scaleY(-1);
      }
   }
`