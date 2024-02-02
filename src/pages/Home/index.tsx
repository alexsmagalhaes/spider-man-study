import { SectionBenefits } from "./SectionBenefits";
import { SectionEditions } from "./SectionEditions";
import { SectionGameplay } from "./SectionGameplay";
import { SectionSlider } from "./SectionSlides";
import { SectionSpecs } from "./SectionSpecs";

export default function Home() {
   return (
      <>
         <SectionSlider />
         <SectionEditions />
         <SectionBenefits />
         <SectionGameplay />
         <SectionSpecs />
      </>
   )
}