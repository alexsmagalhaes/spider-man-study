import styled from "styled-components";

export type SizeIcon = 'small' | 'medium' | 'large' 

export const ButtonIconStyles = styled.img<{size:SizeIcon}>`
   min-width: 1.5rem;
   min-height: 1.5rem;
`