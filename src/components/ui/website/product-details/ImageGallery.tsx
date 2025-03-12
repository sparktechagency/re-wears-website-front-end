/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavigationOptions } from "swiper/types";
import productdata from "../../../../data/products.json";

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex justify-between gap-4">
      {/* left side slider controller */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        direction="vertical"
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-[150px] flex flex-col gap-6"
      >
        {productdata[0].images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* right side slide viewer */}
      <div className="relative max-w-screen-sm">
        <Swiper
          thumbs={{ swiper: thumbsSwiper ?? undefined }}
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              (swiper.params.navigation as NavigationOptions).prevEl =
                prevRef.current;
              (swiper.params.navigation as NavigationOptions).nextEl =
                nextRef.current;
            }
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {productdata[0].images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom left-right navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary bg-opacity-40 text-white p-2 rounded-lg z-50"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary bg-opacity-40 text-white p-2 rounded-lg z-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
