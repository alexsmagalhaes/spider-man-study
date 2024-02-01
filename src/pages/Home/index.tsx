import { SectionBenefits } from "./SectionBenefits";
import { SectionEditions } from "./SectionEditions";
import { SectionSlider } from "./SectionSlides";

export default function Home() {
   return (
      <>
         <SectionSlider />
         <SectionEditions />
         <SectionBenefits />
      </>
   )
}