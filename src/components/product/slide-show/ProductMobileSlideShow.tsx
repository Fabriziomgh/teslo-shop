'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
   images: string[];
   title: string;
   className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
   return (
      <>
         <div className={className}>
            <Swiper
               style={{
                  width: '100vw',
                  height: '500px',
               }}
               pagination
               modules={[FreeMode, Pagination]}
               className="mySwiper2"
            >
               {images.map((img) => (
                  <SwiperSlide key={img}>
                     <Image
                        src={`/products/${img}`}
                        height={600}
                        width={500}
                        alt={title}
                        className=""
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   );
};
