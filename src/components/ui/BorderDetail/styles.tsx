import styled from "styled-components";

export const BorderDetailStyled = styled.div`
      position: absolute;
      z-index: 1;
      width: calc(100% + 0.5rem);
      height: calc(100% + 0.5rem);

      .border-image{
         position: absolute;

         &.corner-1{
         top: -0.1875rem;
         left: -0.1875rem;
         }

         &.corner-2{
            bottom: -0.1875rem;
            left: -0.1875rem;
         }

         &.corner-3{
            top: -0.1875rem;
            right: -0.1875rem;
         }

         &.corner-4{
            bottom: -0.1875rem;
            right: -0.1875rem;
         }
      }
`