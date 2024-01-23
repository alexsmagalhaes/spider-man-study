import styled from "styled-components";

export type Size = 'small' | 'medium' | 'large';

export const sizeValues = {
   small: {
      padding: '0.75rem 1.5rem',
      // other styles for small size
   },
   medium: {
      padding: '0.875rem 2rem',
      // other styles for medium size
   },
   large: {
      padding: '1rem 2.5rem',
      // other styles for large size
   },
};

export type Type = 'primary' | 'secondary';

export type ButtonStyleType = {
   borderColor: string;
   bgColor: string;
   textColor: string;
   hover: {
      borderColor: string;
      bgColor: string;
      textColor: string;
   };
};

export const typeValues: Record<Type, ButtonStyleType> = {
   primary: {
      borderColor: 'var(--orange-03)',
      bgColor: 'var(--orange-03)',
      textColor: 'var(--white-defult)',
      hover: {
         borderColor: 'var(--orange-01)',
         bgColor: 'var(--orange-01)',
         textColor: 'var(--white-defult)',
      },
   },
   secondary: {
      borderColor: 'rgb(47, 47, 59)',
      bgColor: 'transparent',
      textColor: 'var(--white-defult)',
      hover: {
         borderColor: 'var(--white-defult)',
         bgColor: 'var(--white-defult)',
         textColor: 'var(--gray-dark-02)',
      },
   },
};


export const ButtonBodyStyle = styled.button<{ size?: Size, type?: Type }>`

   padding: ${({ size }) => size ? sizeValues[size]?.padding : sizeValues.medium.padding};
   border-radius: 12rem;
   color: ${({ type }) => type ? typeValues[type].textColor : typeValues.primary.textColor};
   border: 1.75px solid ${({ type }) => type ? typeValues[type].borderColor : typeValues.primary.borderColor};
   background-color: ${({ type }) => type ? typeValues[type].bgColor : typeValues.primary.bgColor};
   transition: all 250ms ease;
   cursor: pointer;

   &:hover{
      color: ${({ type }) => type ? typeValues[type].hover.textColor : typeValues.primary.hover.textColor};
      border: 1.75px solid ${({ type }) => type ? typeValues[type].hover.borderColor : typeValues.primary.hover.borderColor};
      background-color: ${({ type }) => type ? typeValues[type].hover.bgColor : typeValues.primary.hover.bgColor};
   }

`;
