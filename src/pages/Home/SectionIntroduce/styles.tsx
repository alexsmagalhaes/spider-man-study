import styled from "styled-components";

//assets
import BgImageVenon from "@/assets/bg-venon.png"
import BgImage01 from "@/assets/bg/01.png"
import BgImage02 from "@/assets/bg/02.png"
import BgImage03 from "@/assets/bg/03.png"
import BgImage04 from "@/assets/bg/04.png"
import BgImage05 from "@/assets/bg/05.png"
import BgImage06 from "@/assets/bg/06.png"
import BgImage07 from "@/assets/bg/07.png"
import BgImage08 from "@/assets/bg/08.png"
import { breakPoints } from "@/utils/media";

export const SectionIntroduceStyled = styled.section`
   position: sticky;
   z-index: -1;
   top: 0;
   height: 50rem;
   display: flex;
   align-items: center;
   padding: 4rem 0;
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
   transition: background-image .3s ease;
   animation: introduce-bg 8s infinite linear;

   ${breakPoints.tablet}{
      height: 27rem;
      padding: 2rem 0;
   }

   @keyframes introduce-bg {
      0% {
         background-image: url(${BgImageVenon});
      }

      20% {
         background-image: url(${BgImage01});
      }

      35% {
         background-image: url(${BgImage02});
      }

      45% {
         background-image: url(${BgImage03});
      }

      55% {
         background-image: url(${BgImage04});
      }

      65% {
         background-image: url(${BgImage05});
      }

      75% {
         background-image: url(${BgImage06});
      }

      85% {
         background-image: url(${BgImage07});
      }

      95% {
         background-image: url(${BgImage08});
      }

      100% {
         background-image: url(${BgImageVenon});
      }
   }

   .container-medium {

      .home-introduce_heading {
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
         position: relative;
         z-index: 2;

         h2 {
            margin-bottom: 0.5rem;
         }

         p {
            margin-bottom: 4.5rem;
            font-size: 1.125rem;
            color: var(--gray-light-02);

            ${breakPoints.tablet}{
               font-size: 1rem;
               margin-bottom: 3.5rem;
            }
         }

         .home-introduce_arrow-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.125rem;

            .home-introduce_arrow-body {}

            .home-introduce_arrow {
               animation: arrow-move 1s linear infinite;

               @keyframes arrow-move {
                  0% {
                     transform: translateY(0rem);
                  }

                  50% {
                     transform: translateY(0.125rem);
                  }

                  100% {
                     transform: translateY(0rem);
                  }
               }
            }
         }
      }
   }

   .home-introduce_filter{
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #000407 0%, rgba(0, 4, 7, 0.00) 32%, rgba(0, 4, 7, 0.00) 64%, #000407 100%);
   }
`