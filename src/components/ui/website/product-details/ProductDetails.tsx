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
import { Rate } from "antd";
import MakeOfferModal from "../inbox/MakeOfferModal";
import toast from "react-hot-toast";
import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";

const ProductDetails = ({
  product,
  seller,
  buyer,
}: {
  product: any;
  seller: any;
  buyer: any;
}) => {
  const productData = product?.result;

  const [open, setOpen] = useState(false);
  const [makeOfferModal, setMakeOfferModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // handle reserving
  const handleReserveNow = async () => {
    toast.loading("Reserving...", { id: "reserve" });
    const payload = {
      seller: seller?.user?._id,
      buyer: buyer?._id,
      product: productData?._id,
      status: "Reserved",
    };
    console.log(payload);

    try {
      const res = await myFetch(`/order/create`, {
        method: "POST",
        body: payload,
      });
      if (res?.success) {
        toast.success("Reserved successfully", { id: "reserve" });
        setOpen(false);
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", { id: "reserve" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // handle release
  const handleRelease = async () => {
    toast.loading("Loading...", { id: "release" });
    const payload = {
      product: productData?._id,
      status: "Released",
    };

    try {
      const res = await myFetch(`/order/update`, {
        method: "PATCH",
        body: payload,
      });
      if (res?.success) {
        toast.success("Released successfully", { id: "release" });
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", { id: "release" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // handle wishlist
  const handleWishlist = async () => {
    toast.loading("Loading...", { id: "wishlist" });
    const payload = {
      product: productData?._id,
    };

    try {
      const res = await myFetch(`/wishlist`, {
        method: "POST",
        body: payload,
      });
      console.log(res);
      if (res?.success) {
        toast.success("Added to wishlist", { id: "wishlist" });
        setOpen(false);
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Failed to add wishlist", {
          id: "wishlist",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

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

            {productData?.category?.name && (
              <p className="flex items-center gap-2">
                <Link
                  href={`/products?category=${productData?.category?._id}`}
                  className="link !font-normal"
                >
                  {productData?.category?.name}
                </Link>
                <Minus className="text-primary" />
              </p>
            )}

            {productData?.category?.subCategory?.name && (
              <p className="flex items-center gap-2">
                <Link
                  href={`/products?category=${productData?.category?.subCategory?._id}`}
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
                  href={`/products?category=${productData?.category?.childSubCategory?._id}`}
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
            <div className="grid gap-2 px-6">
              {productData?.status === "Active" && (
                <FillButton
                  onClick={() => setOpen(true)}
                  className="uppercase w-full"
                >
                  Reserve Now
                </FillButton>
              )}
              {productData?.status === "Reserved" && (
                <FillButton className="uppercase w-full bg-[#D04555] hover:bg-[#c64251] cursor-not-allowed">
                  Reserved
                </FillButton>
              )}

              {productData?.status === "Reserved" && (
                <FillButton
                  onClick={handleRelease}
                  className="uppercase w-full"
                >
                  Changed your mind? Release
                </FillButton>
              )}

              <Link href={""}>
                <OutlineButton
                  onClick={() => setMakeOfferModal(true)}
                  className="uppercase w-full"
                >
                  Make an offer
                </OutlineButton>
              </Link>
              <Link href={`/inbox?recipient=${productData?.user?._id}`}>
                <OutlineButton className="uppercase w-full">
                  Message seller
                </OutlineButton>
              </Link>

              <div className="" onClick={() => setIsFavorite(!isFavorite)}>
                <OutlineButton
                  onClick={handleWishlist}
                  className="uppercase w-full flex items-center justify-center gap-2"
                >
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
        <ReserveNowModal
          open={open}
          setOpen={setOpen}
          action={handleReserveNow}
        />
        <MakeOfferModal
          product={productData}
          open={makeOfferModal}
          setOpen={setMakeOfferModal}
        />
      </section>
    </div>
  );
};

export default ProductDetails;
