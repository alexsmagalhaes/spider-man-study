import { ReactNode, useRef, useState } from "react";
import { SectionSliderStyled } from "./styles";
import { CardVideo } from "@/components/ui/CardVideo";
import { SlideControl } from "@/components/ui/SlideControl";
import { SlidePagination } from "@/components/ui/SlidePagination";

//assets
import ThumbVideo01 from '@/assets/thumb-01.jpg'
import ThumbVideo02 from '@/assets/thumb-02.jpg'
import ThumbVideo03 from '@/assets/thumb-03.jpg'
import ThumbVideo04 from '@/assets/thumb-04.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'

interface slideItemsProps {
   thumbnail: string,
   title: string,
}

const slidesItems: slideItemsProps[] = [
   {
      thumbnail: ThumbVideo01,
      title: 'Gameplay Reveal',
   }, {
      thumbnail: ThumbVideo02,
      title: 'Story Trailer',
   }, {
      thumbnail: ThumbVideo03,
      title: 'Introduction Kraven',
   }, {
      thumbnail: ThumbVideo04,
      title: 'Reveal Trailer',
   },
]

export function SectionSlider(): ReactNode {
   //Add a state that will trigger a re-render later
   const [_, setInit] = useState(false)

   const prevRef = useRef(null);
   const nextRef = useRef(null);

   const classPagination = 'swiper-pagination'

   return (
      <SectionSliderStyled>
         <div className="container-medium">
            <div className="home-slider_heading">
               <h2 className="h5">Últimos vídeos</h2>
               <SlidePagination className={classPagination} />
            </div>
   
            <Swiper
               className="swiper_slide-wrapper"
               spaceBetween={28}
               slidesPerView={"auto"}
               speed={800}

               pagination={{
                  el: `.${classPagination}`,
                  clickable: true,
                  renderBullet: (_, className) => {
                     return '<span class="' + className + '"></span>';
                  },
               }}

               modules={[Navigation, Pagination]}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                  disabledClass: 'disable',
               }}
               onBeforeInit={() => setInit(true)}
            >
               <div className="slide-trailers_control is-01" ref={prevRef}>
                  <SlideControl />
               </div>
               <div className="slide-trailers_control is-02" ref={nextRef}>
                  <SlideControl reverse />
               </div>
               {
                  slidesItems.map(({ thumbnail, title, }: slideItemsProps, index: number) => {
                     return (
                        <SwiperSlide className="swiper_slide-wrap" key={`Slide-Video-${index}`}>
                           <CardVideo
                              thumbnail={thumbnail}
                              title={title}
                              alt={title}
                              size={"medium"}
                           />
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         </div>
      </SectionSliderStyled>
   )
}