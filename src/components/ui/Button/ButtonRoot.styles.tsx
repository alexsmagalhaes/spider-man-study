import styled from "styled-components";

export type Size = 'small' | 'medium' | 'large';
export type Type = 'primary' | 'secondary';

interface ButtonProps {
   size: Size;
   type: Type;
}

export const ButtonRootStyle = styled.button<ButtonProps>`
   transition: all 250ms ease;
   border-radius: 12rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;

   ${({ size }) => size === 'small' && `
      &.small {
         padding: 0.75rem 1.5rem;
         max-height: 2.5rem;

         &.circle{
            padding: 0 !important;
            height: 2.5rem;
            width: 2.5rem;
         }
      }
   `}

   ${({ size }) => size === 'medium' && `
      &.medium {
         padding: 0.875rem 2rem;
         max-height: 3rem;
      
         &.circle{
            padding: 0 !important;
            height: 3rem;
            width: 3rem;
         }
      }
   `}
   
   ${({ size }) => size === 'medium' && `
      &.large {
         padding: 1rem 2.5rem;
         max-height: 3.5rem;

         &.circle{
            padding: 0 !important;
            height: 3.5rem;
            width: 3.5rem;
         }
      }
   `}

   ${({ type }) => type === 'primary' && `
      color: var(--white-defult);
      background-color: var(--orange-03);
      border: 1.75px solid var(--orange-03);
      outline: 0rem solid rgba(245, 88, 39, 0.30);

      &:hover {
         color: var(--white-defult);
         background-color: var(--orange-01);
         border: 1.75px solid var(--orange-01);
         outline: 0.2rem solid rgba(245, 88, 39, 0.30);
      }
   `}

   ${({ type }) => type === 'secondary' && `
      color: var(--white-defult);
      background-color: transparent;
      border: 1.75px solid rgb(47, 47, 59);
      outline: 0rem solid transparent;

      &:hover {
         color: var(--gray-dark-02);
         background-color: var(--white-defult);
         border: 1.75px solid rgb(47, 47, 59);
         outline: 0.2rem solid rgba(255, 255, 255, 0.30);
      }
   `}
`;

