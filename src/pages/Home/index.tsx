import { DividerBlock } from "@/components/ui/DividerBlock";
import { SectionBenefits } from "./SectionBenefits";
import { SectionEditions } from "./SectionEditions";
import { SectionGameplay } from "./SectionGameplay";
import { SectionSlider } from "./SectionSlides";
import { SectionSpecs } from "./SectionSpecs";
import { SectionIntroduce } from "./SectionIntroduce";
import { SectionHero } from "./SectionHero";

//assets
import Divider02 from '@/assets/line-2.svg'
import Divider03 from '@/assets/line-3.svg'

export default function Home() {
   return (
      <>
         <SectionHero />
         <SectionSlider />
         <SectionIntroduce />
         <SectionEditions />
         <DividerBlock image={Divider03} />
         <SectionBenefits />
         <SectionGameplay />
         <DividerBlock image={Divider02} />
         <SectionSpecs />
      </>
   )
}