"use client";

import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";
import { Heart, Minus } from "lucide-react";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import { useState } from "react";
import ReserveNowModal from "./ReserveNowModal";
import { RxHeartFilled } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import { MdWatchLater } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { config } from "@/config/env-config";

const ProductDetails = ({ product }: { product: any }) => {
  const productData = product?.result;
  console.log(productData);

  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="container">
      {/* category breadcumb */}
      <section className=" ">
        <div className=" no-scrollbar  overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-2 w-full py-6">
            <p className="flex items-center gap-2">
              <Link href={"/"} className="link !font-normal">
                Home
              </Link>
              <Minus className="text-primary" />
            </p>

            <p className="flex items-center gap-2">
              <Link href={""} className="link !font-normal">
                Women
              </Link>
              <Minus className="text-primary" />
            </p>

            <p className="flex items-center gap-2">
              <Link href={""} className="link !font-normal">
                Clothing
              </Link>
              <Minus className="text-primary" />
            </p>

            <p className="flex items-center gap-2">
              <Link href={""} className="link !font-normal">
                Dresses
              </Link>
              <Minus className="text-primary" />
            </p>

            <p className="flex items-center gap-2">
              <Link href={""} className="link !font-normal  w-full">
                Little pink dresses
              </Link>
              <Minus className="text-primary" />
            </p>

            <p className="flex items-center gap-2">
              <Link href={""}>Forever 21 Little pink dresses</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between gap-6 pb-4">
        {/* left side content */}
        <section className="flex-1">
          <div className="card">
            <ImageGallery product={productData} />
          </div>
        </section>

        {/* right side content */}
        <section className="max-w-md w-full grid gap-6">
          {/* product info */}
          <div className="grid gap-6 py-6 bg-white shadow-smooth rounded-xl">
            <h1 className="text-2xl font-bold px-6">${productData?.price}</h1>
            <ul className="grid gap-1">
              <li className="grid grid-cols-2 gap-2 bg-[#F9F8F2] p-3 px-6">
                <span className="text-[#797979]">Brand</span>
                <span className="text-primary font-bold">
                  {productData?.brand?.name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 bg-[#F4F2E5] p-3 px-6">
                <span className="text-[#797979]">Size</span>
                <span className="font-bold">{productData?.size?.name}</span>
              </li>
              <li className="grid grid-cols-2 gap-2 bg-[#F9F8F2] p-3 px-6">
                <span className="text-[#797979]">Condition</span>
                <span className="font-bold">{productData?.condition}</span>
              </li>
              <li className="grid grid-cols-2 gap-2 bg-[#F4F2E5] p-3 px-6">
                <span className="text-[#797979]">Color</span>
                <span className="font-bold">
                  {productData?.colors
                    ?.map((item: any) => item?.name)
                    .join(", ")}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 bg-[#F9F8F2] p-3 px-6">
                <span className="text-[#797979]">Location</span>
                <span className="font-bold">{productData?.user?.location}</span>
              </li>
              {/* <li className="grid grid-cols-2 gap-2 bg-[#F4F2E5] p-3 px-6">
                <span className="text-[#797979]">Payment Options</span>
                <span className="font-bold">Bank Card</span>
              </li> */}
              {/* <li className="grid grid-cols-2 gap-2 bg-[#F9F8F2] p-3 px-6">
                <span className="text-[#797979]">Views</span>
                <span className="font-bold">0</span>
              </li> */}
              <li className="grid grid-cols-2 gap-2 bg-[#F4F2E5] p-3 px-6">
                <span className="text-[#797979]">Uploaded</span>
                <span className="font-bold">
                  {productData?.createdAt
                    ? formatDistanceToNow(new Date(productData?.createdAt), {
                        addSuffix: true,
                      })
                    : "Unknown"}
                </span>
              </li>
            </ul>

            <div className="px-6">
              <h1 className="text-lg font-bold">{productData?.name}</h1>
              <p className="text-[#797979]">{productData?.description}</p>
            </div>

            {/* user actions */}
            <div className="grid gap-2 px-6">
              <Link href={""}>
                <span onClick={() => setOpen(true)}>
                  <FillButton className="uppercase w-full">
                    Reserve Now
                  </FillButton>
                </span>
              </Link>
              <Link href={""}>
                <OutlineButton className="uppercase w-full">
                  Make an offer
                </OutlineButton>
              </Link>
              <Link href={""}>
                <OutlineButton className="uppercase w-full">
                  Message seller
                </OutlineButton>
              </Link>

              <div className="" onClick={() => setIsFavorite(!isFavorite)}>
                <OutlineButton className="uppercase w-full flex items-center justify-center gap-2">
                  {isFavorite ? (
                    <div className="flex items-center gap-1">
                      <RxHeartFilled size={24} /> remove from wishlist
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <Heart /> add to wishlist
                    </div>
                  )}
                </OutlineButton>
              </div>
            </div>
          </div>

          {/* user info */}
          <div className="card !p-6 grid gap-4">
            <div className="flex flex-col md:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={`${config.IMAGE_URL}${productData?.user?.image}`}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-lg font-bold">@mykola888</h1>
                  <p className="text-[#797979] text-sm">No reviews yet</p>
                </div>
              </div>
              <Link href={"/profile"}>
                <OutlineButton>See profile</OutlineButton>
              </Link>
            </div>
            <div className="grid gap-2">
              <p className="flex items-center gap-2 ">
                <span>
                  <HiLocationMarker size={20} color="#9d977a" />
                </span>
                <span>{productData?.user?.location || "Unknown"}</span>
              </p>
              <p className="flex items-center gap-2 ">
                <span>
                  <MdWatchLater size={20} color="#9d977a" />
                </span>
                <span> Last seen 10 hours ago (static time) </span>
              </p>
            </div>
          </div>
        </section>
        <ReserveNowModal open={open} setOpen={setOpen} />
      </section>
    </div>
  );
};

export default ProductDetails;
