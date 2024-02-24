import { Tag } from "@/components/ui/Tag";
import { SectionHeroStyled } from "./styles";
import { Button } from "@/components/ui/Button";
import { HeroVideoToggle } from "./components/HeroVideoToggle";
import YouTube from "react-youtube";
import { useState } from "react";

//assets
import IconHeart from '@/assets/heart.svg'
import IconPS5 from '@/assets/icon-ps5.svg'
import IconSingle from '@/assets/icon-singleplayer.svg'
import IconPlus from '@/assets/plus.svg'
import IconClassification from '@/assets/classification-icon.svg'
import CoverVideo01 from '@/assets/home-hero-video-cover-1.jpg'
import CoverVideo02 from '@/assets/home-hero-video-cover-2.jpg'

const videoOptions = {
   height: '100%',
   width: '100%',
   playerVars: {
      autoplay: 1,
      controls: false,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      start: 22,
   }
};

interface videoListProps {
   thumbnail: string,
   alt: string,
   video: string
}

const videoList: videoListProps[] = [
   {
      thumbnail: CoverVideo01,
      alt: 'introdução',
      video: 'bgqGdIoa52s'
   }, {
      thumbnail: CoverVideo02,
      alt: 'gamepaly',
      video: 'ZRhJT2nmvA4'
   },
]

export function SectionHero() {
   const [currentVideoButton, setCurrentVideoButton] = useState<number>(0)
   const handleButtonVideo = (index: number) => {
      setCurrentVideoButton(index);
   }

   const [currentVideo, setCurrentVideo] = useState<string>(videoList[0].video)
   const handleVideo = (url: string) => {
      setCurrentVideo(url);
   }

   return (
      <SectionHeroStyled>
         <div className="container-medium">
            <div className="home-hero_heading">
               <div className="home-hero_header">
                  <Tag textBase="Disponível para" textAuxiliar="PS5" />
                  <h1>Marvel's Spider-Man 2</h1>
                  <p>Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5.</p>
               </div>
               <div className="home-hero_pricing">
                  <div className="h4">R$ 349,90</div>
                  <div className="home-hero_buttons">
                     <Button.Root size="large" type="primary">
                        <Button.Text size="medium">Adicionar ao carrinho</Button.Text>
                     </Button.Root>
                     <Button.Root size="large" type="secondary" circle={true} >
                        <Button.Icon src={IconHeart} alt="favoritar item" size="tiny" />
                     </Button.Root>
                  </div>
               </div>
               <div className="home-hero_benefits">
                  <div className="home-hero_benefit">
                     <img src={IconPS5} alt="beneficio" />
                     <span>Lançado 20/10/2023</span>
                     <span>•</span>
                     <span>Versão para PS5</span>
                  </div>
                  <div className="home-hero_benefit">
                     <img src={IconSingle} alt="beneficio" />
                     <span>1 jogador. Compatível com função de vibração e efeito gatilho</span>
                  </div>
                  <div className="home-hero_benefit">
                     <img src={IconPlus} alt="beneficio" />
                     <span>Compatível com a ajuda do jogo</span>
                  </div>
               </div>
            </div>

            <div className="home-hero_side-content">
               <div className="home-hero_classify">
                  <img src={IconClassification} alt="público" />
                  <span>Violência<br /> Compras no jogo</span>
               </div>
               <div className="home-hero_videos">
                  {
                     videoList.map(({ thumbnail, alt, video }: videoListProps, index: number) => {
                        return (
                           <HeroVideoToggle
                              key={`Video-hero-${index}`}
                              thumbnail={thumbnail}
                              active={currentVideoButton === index ? 'is-active' : ''}
                              alt={alt}
                              onClick={
                                 () => {
                                    handleButtonVideo(index)
                                    handleVideo(video)
                                 }
                              }
                           />
                        )
                     })
                  }
               </div>
            </div>
         </div>

         <div className="home-hero_filter-video"></div>
         <YouTube videoId={currentVideo} opts={videoOptions} className="home-hero_video" />
      </SectionHeroStyled>
   )
}