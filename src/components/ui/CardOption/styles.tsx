import styled from "styled-components";

export const CardOptionStyled = styled.div`
   background: var(--gray-dark-02);
   padding: 2rem;
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
   justify-content: space-between;
   position: relative;
   transition: all 250ms ease;

   &:hover{
      background: var(--gray-dark-03);

      .edition_icons{
         .edition_icon{
            opacity: 1;
            
            &.default{
               margin-left: 8px;
               transform: rotateZ(180deg);
            }

            &.deluxe.is-2{
               margin-left: -0.875rem;
            }
         }
      }
   }

   .edition_spacial{
      background: linear-gradient(90deg, #CFA868 0%, #DBB677 31.32%, #F0D7A2 65.63%, #926A30 95.47%);
      padding: 0rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: 0;
      left: 0;
      top: -1.5rem;
      height: 1.5rem;

      span{
         color: var(--gray-dark-02, #101014);
         font-size: 0.5625rem;
         font-weight: 600;
         letter-spacing: 0.06rem;
         text-transform: uppercase;
      }
   }

   .edition_icons{
      position: relative;

      .edition_icon{
         display: inline-block;
         transition: all 250ms ease-out;
         opacity: 0.15;

         &.is-2{
            margin-left: -1.25rem;
         }
      }
   }

   .edition_title{
      margin-top: 2.25rem;
   }

   ul{
      padding-left: 1rem;
      color: var(--gray-light-04);
   }

   .edition_footer{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;

      .edition_buttons{
         display: flex;
         align-items: flex-start;
         gap: 1.375rem;
         
      }
   }
`