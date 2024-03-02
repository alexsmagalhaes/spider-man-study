import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionHeroStyled = styled.header`
   position: relative;
   padding-top: 7rem;
   padding-bottom: 8.75rem;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;

   ${breakPoints.tablet}{
      padding-top: 9rem;
      padding-bottom: 0rem;
   }

   .home-hero_video{
      position: absolute;
      top: -20%;
      z-index: -3;
      width: 120%;
      height: 120%;
      min-width: 100vw;

      video{
         aspect-ratio: inherit;
      }

      ${breakPoints.laptop}{
         width: 220%;
      }

      ${breakPoints.tablet}{
         width: 280%;
      }

      ${breakPoints.mobile}{
         width: 400%;
      }
   }

   .home-hero_filter-video{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: -1;
      background: 
      linear-gradient(90deg, rgba(6, 6, 8, .6) 4%, rgba(6, 6, 8, 0.04) 100%),
      linear-gradient(transparent, rgba(6, 6, 8, 1)),
      linear-gradient(180deg, #060608 0%, rgba(6, 6, 8, 0.49) 12%, rgba(6, 6, 8, 0.00) 24%);
   }

   .container-medium{
      display: flex;
      gap: 2rem;
      justify-content: space-between;


      .home-hero_heading{
         display: flex;
         flex-direction: column;
         max-width: 38.875rem;

         ${breakPoints.tablet}{
            max-width: none;
         }

         .home-hero_header{
            margin-bottom: 3rem;

            ${breakPoints.tablet}{
               margin-bottom: 1.5rem;
            }

            h1{
               margin-top: 1.5rem;
               margin-bottom: 0.5rem;
            }
            
            p{
               font-size: 1.125rem;

               ${breakPoints.tablet}{
                  font-size: 1rem;
               }
            }
         }

         .home-hero_pricing{
            margin-bottom: 4.5rem;

            ${breakPoints.tablet}{
               margin-bottom: 2.5rem;
            }

            .home-hero_buttons{
               margin-top: 1.5rem;
               display: flex;
               gap: 1.25rem;
               flex-wrap: wrap;
            }
         }

         .home-hero_benefits{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            ${breakPoints.tablet}{
               font-size: 0.875rem;
            }

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

         ${breakPoints.laptop}{
            display: none;
         }
         
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