import styled from "styled-components";

import BgCard from '@/assets/benefits-bg.jpg'

export const CardSpiderManStyled = styled.div`
   position: relative;
   background-image: url(${BgCard});
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   grid-column: 3;
   grid-row: 1;

   .spider-man{
      min-width: 118%;
      bottom: 0;
      left: -15.5%;
      position: absolute;
   }
`