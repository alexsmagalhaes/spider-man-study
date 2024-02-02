import styled from "styled-components";

export const DividerBlockStyled = styled.div`
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