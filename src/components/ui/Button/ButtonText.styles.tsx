import styled from "styled-components";

export type Size = "small" | "medium" | "large";

export type ButtonStyleSize = {
   fontSize: string;
};

export const sizeValues: Record<Size, ButtonStyleSize> = {
   small: {
      fontSize: '0.875rem',
   },
   medium: {
      fontSize: '1rem',
   },
   large: {
      fontSize: '1.125rem',
   },
};

export const ButtonTextStyles = styled.span<{ size?: Size }>`
   font-size: ${({ size }) => (size ? sizeValues[size].fontSize : sizeValues.medium.fontSize)};
   font-weight: 500;
`;
