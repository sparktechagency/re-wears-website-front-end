/* eslint-disable @next/next/no-img-element */
"use client";

import OutlineButton from "@/components/shared/OutlineButton";
import { Popover } from "antd";
import MakeOfferModal from "./MakeOfferModal";
import { useEffect, useState } from "react";
import { useGetSearchParams } from "@/helpers/getSearchParams";
import { myFetch } from "@/helpers/myFetch";
import { IMAGE_URL } from "@/config/env-config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { revalidateTags } from "@/helpers/revalidateTags";

const ProductInfo = () => {
  const router = useRouter();
  const { product } = useGetSearchParams();
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (product) {
        try {
          const response = await myFetch(`/product/${product}`, {
            method: "GET",
            tags: ["Product"],
          });
          setProductData(response?.data);
          const profileResponse = await myFetch(`/users/profile`);
          setProfileData(profileResponse?.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
    };

    fetchProductData();
  }, [product]);

  // handle product reserve
  const handleReserve = async () => {
    const payload = {
      seller: productData?.result?.user?._id,
      buyer: profileData?._id,
      product: productData?.result?._id,
      status: "Reserved",
    };

    try {
      const response = await myFetch(`/order/create`, {
        method: "POST",
        body: payload,
      });
      if (response?.success) {
        toast.success("Product reserved successfully", {
          id: "reserve-product",
        });
        revalidateTags(["Product", "products", "Order"]);
        router.push(`/order/${productData?.result?._id}`);
      }
    } catch (error) {
      console.error("Error reserving product:", error);
    }
  };

  if (!productData) return null;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border border-[#DCDCDC] bg-[#f8f8f8] rounded-lg mt-4">
      <div className="flex items-center gap-4">
        <img
          src={
            productData?.result?.productImage?.[0]?.includes("http")
              ? productData?.result?.productImage?.[0]
              : `${IMAGE_URL}${productData?.result?.productImage?.[0]}`
          }
          alt=""
          className=" lg:w-[70px] w-[64px] lg:h-[76px] h-[70px] rounded-lg "
        />

        <div className="flex flex-col  items-start gap-2">
          <p className="text-[16px] text-secondary font-bold ">
            {productData?.result?.name}
          </p>
          <p className="text-[14px] text-secondary font-normal ">
            AED {productData?.result?.price}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between lg:justify-end gap-x-4">
        <div onClick={() => setOpen(true)}>
          <OutlineButton className="!px-4 lg:text-sm text-[12px] uppercase w-full">
            Make an offer
          </OutlineButton>
        </div>

        {productData?.result?.status === "Reserved" && (
          <div>
            <Popover content=" Changed your mind? Head to the item page to release it for someone else to re-wear.">
              <button className=" h-12 text-white font-normal rounded-full  transition-all duration-300  bg-[#D04555] hover:bg-[#b93d4c]  !px-4 lg:text-sm text-[12px] uppercase cursor-not-allowed">
                Reserved
              </button>
            </Popover>
          </div>
        )}

        {(productData?.result?.status === "Active" ||
          productData?.result?.status === "Released") && (
          <div onClick={handleReserve}>
            <Popover content=" Changed your mind? Head to the item page to release it for someone else to re-wear.">
              <button className=" h-12  bg-primary text-white font-normal rounded-full  transition-all duration-300 !px-4 lg:text-sm text-[12px] uppercase">
                Reserve Now
              </button>
            </Popover>
          </div>
        )}
      </div>

      <MakeOfferModal
        product={productData?.result}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ProductInfo;
