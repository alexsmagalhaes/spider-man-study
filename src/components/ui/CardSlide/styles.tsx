import styled from "styled-components";

export type Size = 'default'

export const CardSlideStyled = styled.div`
   .slide_wrap{
      position: relative;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .filter{
         position: absolute;
         width: 100%;
         height: 100%;
         opacity: 0.8;
         background: linear-gradient(0deg, #060608 -4.17%, rgba(6, 6, 8, 0.00) 100%);
      }

      .thumbnail-image{
         width: 100%;
         height: 28rem;
         object-fit: cover;
      }
   }
   
   h3{
      font-size: 1.125rem;
      font-weight: 500;
      font-family: var(--font-body);
      text-transform: none;
      line-height: 1.5;
      margin-left: 0.1875rem;
      color: var(--gray-light-01);
   }
`