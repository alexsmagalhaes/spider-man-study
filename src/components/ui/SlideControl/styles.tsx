import styled from "styled-components";

export const SlideControlStyled = styled.div`
   border-radius: 50%;
   height: 2.5rem;
   width: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--gray-dark-05);
   transition: all 250ms ease;
   cursor: pointer;

   &:hover{
      background-color: var(--white-default);
      color: var(--gray-dark-01);
      outline: 0.2813rem solid rgba(255, 255, 255, 0.3);
   }

   &.reverse{
      transform: rotateZ(180deg);
   }
`