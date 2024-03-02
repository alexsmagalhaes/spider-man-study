import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const TagReleseStyled = styled.div`
   border-radius: 0.375rem;
   overflow: hidden;
   display: flex;
   align-items: stretch;
   height: 2.5rem;
   background-color: var(--gray-dark-03);
   font-weight: 500;
   font-size: 0.875rem;
   color: var(--gray-light-04);

   .tag-relese_block-logo{
      background-color: var(--gray-dark-04);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.875rem;
   }

   .tag-relese_block-infos{
      padding: 0 2rem 0 1rem ;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      ${breakPoints.tablet}{
         gap: 0.75rem;
         padding: 0 1rem 0 0.875rem ;
      }
   }
`