"use client";

import icon from "@/assets/icons/upload.svg";
import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import { IMAGE_URL } from "@/config/env-config";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { ConfigProvider, Segmented } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Closet = ({ products }: { products: any }) => {
  const updateSearchParams = useUpdateSearchParams();

  // reset search params on initial render
  useEffect(() => {
    updateSearchParams({
      productStatus: null,
    });
  }, []);

  return (
    <div className="font-poppins">
      {/* filter buttons */}
      <section className="flex justify-end">
        <ConfigProvider
          theme={{
            components: {
              Segmented: {
                itemSelectedBg: "#9D977A",
                itemSelectedColor: "white",
              },
            },
            token: {},
          }}
        >
          <Segmented<string>
            options={["Active", "Reserved", "Hidden", "Draft", "Sold"]}
            onChange={(value) => updateSearchParams({ productStatus: value })}
          />
        </ConfigProvider>
      </section>

      {/* content body */}
      {products?.length > 0 ? (
        <section>
          <p className="text-[#000000] font-bold">{products?.length} items</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4 flex-wrap mt-5">
            {products?.map((item: any) => (
              <Link
                href={`/product-details/${item?._id}`}
                key={item?._id}
                className="border border-[#DCDCDC] h-[330px] rounded-lg"
              >
                <div>
                  {item?.productImage?.length > 0 ? (
                    <Image
                      src={
                        item?.productImage?.includes("http")
                          ? item?.productImage?.[0]
                          : `${IMAGE_URL}${item?.productImage?.[0]}`
                      }
                      alt="User image"
                      width={250}
                      height={270}
                      className="object-cover h-[270px] w-full rounded-t-lg"
                    />
                  ) : (
                    <div className="h-[270px] flex justify-center items-center text-[#465A63] text-3xl font-bold">
                      No Image
                    </div>
                  )}
                </div>
                <div>
                  <p className="h-[50px] text-primary font-bold flex items-center px-5">
                    $ {item?.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className="grid justify-center gap-4 py-8 lg:py-16">
          <Image
            src={icon}
            alt="icon"
            width={85}
            height={90}
            className="mx-auto"
          />
          <Label className="text-xl lg:text-2xl text-center">
            Upload items to start selling
          </Label>
          <p className="text-[#797979] text-center text-sm lg:text-base">
            Sell your used clothes effortlessly, earning cash without hidden
            fees.
          </p>
          <div className="flex justify-center ">
            <Link href={"/sell-now"}>
              <FillButton className=" uppercase">Sell Now</FillButton>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Closet;
