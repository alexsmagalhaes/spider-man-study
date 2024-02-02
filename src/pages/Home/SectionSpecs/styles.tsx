import styled from "styled-components";

export const SectionSpecsStyled = styled.section`
   padding: 7rem 0;

   .container-medium{
      display: flex;
      gap: 2.5rem;
      justify-content: space-between;
      align-items: center;
      
      .home-specs_heading{
         max-width: 28rem;

         .home-specs_heading-list{
            margin-top: 2rem;
            margin-bottom: 3.5rem;
            font-size: 0.875rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;

            .home-specs_heading-list-row{
               display: grid; 
               grid-template-columns: 44% 56%; 
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
         gap: 1.75rem;
         max-width: 44.25rem;

         .home-specs_card-spider{
            position: relative;
            display: flex;
            justify-content: center;
            max-width: 17.625rem;

            .home-specs_card-spider-image{
               object-fit: cover;
            }

            .home-specs_card-spider-logo{
               position: absolute;
               bottom: 4rem;
            }
         }
      }
   }
`