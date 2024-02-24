import styled from "styled-components";

export const SlidePaginationStyled = styled.div`
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

   .swiper-pagination-bullet {
      width: 0.375rem;
      height: 0.375rem;
      background: var(--gray-dark-05);
      cursor: pointer;
      display: inline-block;
      transition: all 250ms ease;
   }

   .swiper-pagination-bullet-active {
      background: var(--white-default);
   }
`