import styled from "styled-components";

export const NavMenu = styled.nav`
   padding: 1rem 0;
   background-color: var(--gray-dark-01);

      div{
         display: flex;
         justify-content: space-between;
         align-items: center;

         div{
            display: flex;
            align-items: center;
            gap: 3rem;
            
            a{
               font-weight: 500;
               font-size: 0.875rem;
            }
         }
   }
`