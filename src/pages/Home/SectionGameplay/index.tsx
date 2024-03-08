import { ReactNode, useRef, useState } from "react";
import { SectionGameplayStyled } from "./styles";
import { Tag } from "@/components/ui/Tag";
import { CardSlide } from "@/components/ui/CardSlide";
import { SlideControl } from "@/components/swiper/SlideControl";
import { SlidePagination } from "@/components/swiper/SlidePagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'

//assets
import ImageSlide01 from "@/assets/slide-image-gameplay-1.jpg"
import ImageSlide02 from "@/assets/slide-image-gameplay-2.jpg"
import ImageSlide03 from "@/assets/slide-image-gameplay-3.jpg"

interface slideItemsProps {
   title: string,
   image: string,
   alt: string,
}

const slideItems: slideItemsProps[] = [
   {
      title: 'Story Trailer',
      image: ImageSlide01,
      alt: 'Story Trailer',
   }, {
      title: 'Primeiro encontro com o Venom',
      image: ImageSlide02,
      alt: 'Primeiro encontro com o Venom',
   }, {
      title: 'Fight',
      image: ImageSlide03,
      alt: 'Fight',
   }
]

export function SectionGameplay(): ReactNode {
   //Add a state that will trigger a re-render later
   const [_, setInit] = useState(false)

   const prevGameplayRef = useRef(null);
   const nextGameplayRef = useRef(null);

   const classPagination = 'swiper-gameplay-pagination'

   return (
      <SectionGameplayStyled>
         <div className="container-medium">
            <div className="home-gameplay_heading">
               <Tag textBase="GAMEPLAY" />
               <h2 className="h3">VIVA A EXPERIÊNCIA DE PODER JOGAR COM DOIS SPIDERS</h2>
               <p>Alterne rapidamente entre os dois Spiders para maximizar as novas habilidades.</p>
            </div>

            <Swiper
               className="swiper-gameplay_slide"
               spaceBetween={28}
               slidesPerView={"auto"}
               speed={800}
               autoplay={{ delay: 4000, disableOnInteraction: true }}
               grabCursor={true}
               centeredSlides

               breakpoints={
                  {
                     768: {
                        spaceBetween: 80,
                     }
                  }
               }

               effect={"coverflow"}
               coverflowEffect={
                  {
                     rotate: 0,
                     stretch: 0,
                     depth: 80,
                     modifier: 1,
                     slideShadows: true
                  }}

               pagination={{
                  el: `.${classPagination}`,
                  clickable: true,
                  renderBullet: (_, className) => {
                     return '<span class="' + className + '"></span>';
                  },
               }}

               modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
               navigation={{
                  prevEl: prevGameplayRef.current,
                  nextEl: nextGameplayRef.current,
                  disabledClass: 'disable',
               }}
               onBeforeInit={() => setInit(true)}
            >
               <div className="slide-gameplay_control is-01" ref={prevGameplayRef}>
                  <SlideControl />
               </div>
               <div className="slide-gameplay_control is-02" ref={nextGameplayRef}>
                  <SlideControl reverse />
               </div>

               <SlidePagination className={classPagination} />
               
               {
                  slideItems.map(({ image, alt, title }: slideItemsProps, index: number) => {
                     return (
                        <SwiperSlide className="home-gameplay_slide" key={`${title}-${index}`}>
                           <CardSlide image={image} alt={alt} title={title} />
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         </div>
      </SectionGameplayStyled >
   )
}