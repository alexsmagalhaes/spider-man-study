import styled from "styled-components";

export type SizeIcon = 'tiny' | 'small' | 'medium' | 'large'

export const ButtonIconStyles = styled.img<{ size: SizeIcon }>`

   ${(({ size }) => size === 'tiny' && `
      min-width: 1rem;
      min-height: 1rem;
      width: 1rem;
   `)}

   ${(({ size }) => size === 'small' && `
      min-width: 1.25rem;
      min-height: 1.25rem;
      width: 1.25rem;
   `)}
   
   ${(({ size }) => size === 'medium' && `
      min-width: 1.5rem;
      min-height: 1.5rem;
      width: 1.5rem;
   `)}

   ${(({ size }) => size === 'large' && `
      min-width: 1.75rem;
      min-height: 1.75rem;
      width: 1.75rem;
   `)}
`