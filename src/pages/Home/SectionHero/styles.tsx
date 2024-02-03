import styled from "styled-components";

export const SectionHeroStyled = styled.header`
   position: relative;
   padding-top: 7rem;
   padding-bottom: 8.75rem;

   .home-hero_video{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      z-index: -1;
   }

   .container-medium{
      display: flex;
      gap: 2rem;
      justify-content: space-between;


      .home-hero_heading{
         display: flex;
         flex-direction: column;
         max-width: 38.875rem;

         .home-hero_header{
            margin-bottom: 3rem;

            h1{
               margin-top: 1.5rem;
               margin-bottom: 0.5rem;
            }
            
            p{
               font-size: 1.125rem;
            }
         }

         .home-hero_pricing{
            margin-bottom: 4.5rem;

            .home-hero_buttons{
               margin-top: 1.5rem;
               display: flex;
               gap: 1.25rem;
            }
         }

         .home-hero_benefits{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .home-hero_benefit{
               display: flex;
               gap: 1rem;
               align-items: center;
               color: var(--gray-light-05);
               font-weight: 500;
            }
         }
      }

      .home-hero_side-content{
         padding-top: 2.75rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: end;

         .home-hero_classify{
            display: flex;
            gap: 1rem;
            flex-direction: column;
            align-items: end;
            
            span{
               font-size: 0.75rem;
               font-weight: 500;
               color: var(--gray-light-03);
               text-align: right;
            }
         }

         .home-hero_videos{
            display: flex;
            gap: 1.75rem;
         }
      }
   }
   
`