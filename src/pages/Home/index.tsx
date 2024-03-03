import { DividerBlock } from "@/components/ui/DividerBlock";
import { SectionBenefits } from "./SectionBenefits";
import { SectionEditions } from "./SectionEditions";
import { SectionGameplay } from "./SectionGameplay";
import { SectionSlider } from "./SectionSlides";
import { SectionSpecs } from "./SectionSpecs";
import { SectionIntroduce } from "./SectionIntroduce";
import { SectionHero } from "./SectionHero";
import { screenWidth } from "@/utils/media";
import { Helmet } from "react-helmet";

//assets
import Divider02 from '@/assets/line-2.svg'
import Divider03 from '@/assets/line-3.svg'

export default function Home() {

   const title ='Spider Man Case Estudo | PS5'
   const description = 'Esta é a home de um case de estudo baseado no design fornecido pelo Design e Code Boost.'

   return (
      <>
         <Helmet>
            <title>{title}</title>
            <meta content={description} name="description"></meta>
            <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon"></link>

            <meta content={title} property="og:title"></meta>
            <meta content={description} property="og:description"></meta>
            <meta content="opg image here" property="og:image"></meta>
            <meta property="og:type" content="website"></meta>

            <meta content={title} property="twitter:title"></meta>
            <meta content={description} property="twitter:description"></meta>
            <meta content="opg image here" property="twitter:image"></meta>
            <meta content="summary_large_image" name="twitter:card"></meta>

            <link href="images/webclip.jpg" rel="apple-touch-icon"></link>

            <link href="https://spider-man-study.vercel.app/" rel="canonical"></link>
         </Helmet>

         <SectionHero />
         <SectionSlider />
         <SectionIntroduce />
         <SectionEditions />
         {
            (window.innerWidth > screenWidth.tablet) &&
            <DividerBlock image={Divider03} />
         }
         <SectionBenefits />
         <SectionGameplay />
         <DividerBlock image={Divider02} />
         <SectionSpecs />
      </>
   )
}