"use client";

import OutlineButton from "@/components/shared/OutlineButton";
import { Minus } from "lucide-react";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import { HiLocationMarker } from "react-icons/hi";
import { MdWatchLater } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { IMAGE_URL } from "@/config/env-config";
import { Rate } from "antd";
import BuyerActions from "./BuyerActions";
import SellerActions from "./SellerActions";
import { useEffect, useState } from "react";

const ProductDetails = ({
  product,
  seller,
  profile,
}: {
  product: any;
  seller: any;
  profile: any;
}) => {
  const [lastseen, setLastseen] = useState("");
  const productData = product?.result;
  const isMyProduct = productData?.user?._id === profile?._id;

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

            {productData?.category?.category?.name && (
              <p className="flex items-center gap-2">
                <Link
                  href={`/products?category=${productData?.category?.category?.name}`}
                  className="link !font-normal"
                >
                  {productData?.category?.category?.name}
                </Link>
                <Minus className="text-primary" />
              </p>
            )}

            {productData?.category?.subCategory?.name && (
              <p className="flex items-center gap-2">
                <Link
                  href={`/products?category=${productData?.category?.category?.name}&subCategory=${productData?.category?.subCategory?.name}`}
                  className="link !font-normal"
                >
                  {productData?.category?.subCategory?.name}
                </Link>
                <Minus className="text-primary" />
              </p>
            )}

            {productData?.category?.childSubCategory?.name && (
              <p className="flex items-center gap-2">
                <Link
                  href={`/products?category=${productData?.category?.category?.name}&subCategory=${productData?.category?.subCategory?.name}&childSubCategory=${productData?.category?.childSubCategory?.name}`}
                  className="link !font-normal"
                >
                  {productData?.category?.childSubCategory?.name}
                </Link>
                <Minus className="text-primary" />
              </p>
            )}

            <p className="flex items-center gap-2">{productData?.name}</p>
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
            {isMyProduct ? (
              <SellerActions productData={productData} />
            ) : (
              <BuyerActions
                productData={productData}
                profile={profile}
                seller={seller}
              />
            )}
          </div>

          {/* user info */}
          <div className="card !p-6 grid gap-4">
            <div className="flex flex-col md:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={`${IMAGE_URL}${productData?.user?.image}`}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-lg font-bold">
                    @{productData?.user?.userName}
                  </h1>
                  <p className="text-[#797979] text-sm">
                    {seller?.customerAvgRating > 0 ? (
                      <Rate
                        disabled
                        value={seller?.customerAvgRating}
                        style={{ color: "#FDB11A" }}
                      />
                    ) : (
                      "No reviews yet"
                    )}
                  </p>
                </div>
              </div>
              <Link href={`/profile?id=${seller?.user?._id}`}>
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
                <span>Last seen {lastseen} </span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductDetails;
