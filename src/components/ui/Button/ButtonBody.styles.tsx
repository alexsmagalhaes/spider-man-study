import styled from "styled-components";

export type Size = 'small' | 'medium' | 'large';

export const sizeValues = {
   small: {
      padding: '0.625rem 1.5rem',
      // other styles for small size
   },
   medium: {
      padding: '0.85rem 2rem',
      // other styles for medium size
   },
   large: {
      padding: '1rem 2.5rem',
      // other styles for large size
   },
};

export type Type = 'primary' | 'secondary' | 'ghost' | 'link';

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
      borderColor: 'yourBorderColor',
      bgColor: 'yourBgColor',
      textColor: 'yourTextColor',
      hover: {
         borderColor: 'yourHoverBorderColor',
         bgColor: 'yourHoverBgColor',
         textColor: 'yourHoverTextColor',
      },
   },
   secondary: {
      borderColor: 'yourBorderColor',
      bgColor: 'yourBgColor',
      textColor: 'yourTextColor',
      hover: {
         borderColor: 'yourHoverBorderColor',
         bgColor: 'yourHoverBgColor',
         textColor: 'yourHoverTextColor',
      },
   },
   ghost: {
      borderColor: 'yourBorderColor',
      bgColor: 'yourBgColor',
      textColor: 'yourTextColor',
      hover: {
         borderColor: 'yourHoverBorderColor',
         bgColor: 'yourHoverBgColor',
         textColor: 'yourHoverTextColor',
      },
   },
   link: {
      borderColor: '',
      bgColor: '',
      textColor: '',
      hover: {
         borderColor: '',
         bgColor: '',
         textColor: '',
      },
   },
};

export const ButtonBodyStyle = styled.button<{ size?: Size, type?: Type }>`

   padding: ${({ size }) => size ? sizeValues[size]?.padding : sizeValues.medium.padding};
   border-radius: 2rem;
   border-width: 1.25px;
   background-color: ${({ type }) => type ? typeValues[type].bgColor : typeValues.primary.bgColor};
   transition: all 250ms ease;
   cursor: pointer;

`;
