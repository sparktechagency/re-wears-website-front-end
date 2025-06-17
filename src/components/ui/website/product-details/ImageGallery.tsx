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
import Image from "next/image";
import { config } from "@/config/env-config";

const ImageGallery = ({ product }: { product: any }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  console.log(product?.productImage);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="lg:flex justify-between gap-2">
      {/* left side slider controller */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        direction="vertical"
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !mx-0 !h-[600px]"
      >
        {product?.productImage?.map((image: any, idx: number) => (
          <SwiperSlide key={idx} className="!h-32">
            <Image
              src={`${config.IMAGE_URL}${image}`}
              alt="product image"
              width={100}
              height={100}
              className="hidden lg:block rounded-xl w-32 h-32 object-cover"
            />
          </SwiperSlide>
        ))}
        {/* {productdata[0].images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item}
              alt="product image"
              width={100}
              height={100}
              className="hidden lg:block rounded-xl w-32 h-32 object-cover"
            />
          </SwiperSlide>
        ))} */}
      </Swiper>

      {/* right side slide viewer */}
      <div className="relative w-full lg:max-w-lg">
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
          className="mySwiper2 !h-[600px]"
        >
          {product?.productImage?.map((image: any, idx: number) => (
            <SwiperSlide key={idx}>
              <Image
                src={`${config.IMAGE_URL}${image}`}
                alt="product image"
                width={500}
                height={600}
                className="rounded-xl w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
          {/* {productdata[0].images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} className="rounded-xl w-full" />
            </SwiperSlide>
          ))} */}
        </Swiper>

        {/* Custom left-right navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary bg-opacity-40 text-white p-2 rounded-lg z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary bg-opacity-40 text-white p-2 rounded-lg z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
