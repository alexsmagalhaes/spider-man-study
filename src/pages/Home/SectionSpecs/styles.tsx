import { breakPoints } from "@/utils/media";
import styled from "styled-components";

export const SectionSpecsStyled = styled.section`
   padding: 7rem 0;
   background-color: var(--gray-dark-01);
   overflow: hidden;

   ${breakPoints.tablet}{
      padding: 3.5rem 0 0 0;
   }

   .container-medium{
      display: flex;
      gap: 2.5rem;
      justify-content: space-between;
      align-items: center;

      ${breakPoints.laptop}{
         gap: 1.5rem;
      }

      ${breakPoints.tablet}{
         flex-direction: column;
         align-items: stretch;
         gap: 0;
      }
      
      .home-specs_heading{
         max-width: 26rem;
         display: flex;
         flex-direction: column;
         align-items: start;

         ${breakPoints.tablet}{
            max-width: none;
         }

         .home-specs_heading-list{
            margin-top: 2rem;
            margin-bottom: 3.5rem;
            font-size: 0.875rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;

            ${breakPoints.tablet}{
               margin-top: 1.5rem;
               margin-bottom: 2.5rem;
            }

            .home-specs_heading-list-row{
               width: 100%;
               display: grid; 
               grid-template-columns: 40% 60%; 
               grid-template-rows: 1fr; 

               ${breakPoints.tablet}{
                  grid-template-columns: 24% 60%; 
                  gap: 2rem;
               }

               .home-specs_heading-col-1{
                  color: var(--gray-light-01);
               }
               .home-specs_heading-col-2{
                  font-weight: 500;
               }
            }
         }
      }

      .home-specs_price-block{
         display: flex;
         gap: 2rem;
         max-width: 44.25rem;

         ${breakPoints.laptop}{
            gap: 1.5rem;
         }

         ${breakPoints.tablet}{
            margin-top: 3.5rem;
            margin-bottom: 0rem;
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;
         }

         .home-specs_card-spider{
            position: relative;
            display: flex;
            justify-content: center;
            max-width: 17.625rem;

            ${breakPoints.laptop} {
               display: none;
            }

            ${breakPoints.tablet} {
               display: flex;
               min-width: 100vw;
               height: 26.25rem;
               margin-left: -1.5rem;
            }

            .home-specs_card-spider-image{
               object-fit: cover;
               opacity: 0.56;
               width: 100%;
            }

            /* .home-specs_card-spider-filter{
               position: absolute;
               z-index: 1;
               width: 100%;
               height: 100%;
               background: linear-gradient(rgba(0,0,0,0.), rgba(0,0,0,0.6));
            } */

            .home-specs_card-spider-logo{
               position: absolute;
               bottom: 3.5rem;
               width: 6.125rem;
               z-index: 2;

               ${breakPoints.tablet} {
                  width: 9.25rem;
               }
            }
         }
      }
   }
`