'use client';

import { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';
import Image from 'next/image';

interface Props {
   images: string[];
   title: string;
   className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

   return (
      <>
         <div className={className}>
            <Swiper
               style={
                  {
                     '--swiper-navigation-color': '#fff',
                     '--swiper-pagination-color': '#fff',
                  } as React.CSSProperties
               }
               spaceBetween={10}
               navigation={true}
               thumbs={{ swiper: thumbsSwiper }}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper2"
            >
               {images.map((img) => (
                  <SwiperSlide key={img}>
                     <Image
                        src={`/products/${img}`}
                        height={500}
                        width={500}
                        alt={title}
                        className="rounded-lg "
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <Swiper
               onSwiper={setThumbsSwiper}
               spaceBetween={10}
               slidesPerView={4}
               freeMode={true}
               watchSlidesProgress={true}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper mt-2"
            >
               {images.map((img) => (
                  <SwiperSlide key={img}>
                     <Image
                        src={`/products/${img}`}
                        height={300}
                        width={300}
                        alt={title}
                        className="rounded-lg shadow object-fill"
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   );
};
