import styled from "styled-components";

export const SectionSpecsStyled = styled.section`
   padding: 7rem 0;
   background-color: var(--gray-dark-01);

   .container-medium{
      display: flex;
      gap: 2.5rem;
      justify-content: space-between;
      align-items: center;
      
      .home-specs_heading{
         max-width: 26rem;
         display: flex;
         flex-direction: column;
         align-items: start;

         .home-specs_heading-list{
            margin-top: 2rem;
            margin-bottom: 3.5rem;
            font-size: 0.875rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;

            .home-specs_heading-list-row{
               width: 100%;
               display: grid; 
               grid-template-columns: 40% 60%; 
               grid-template-rows: 1fr; 

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

         .home-specs_card-spider{
            position: relative;
            display: flex;
            justify-content: center;
            max-width: 17.625rem;

            .home-specs_card-spider-image{
               object-fit: cover;
               opacity: 0.56;
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
               bottom: 3.25rem;
               max-width: 6.125rem;
               z-index: 2;
            }
         }
      }
   }
`