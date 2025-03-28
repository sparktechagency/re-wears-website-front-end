"use client";

import icon from "@/assets/icons/upload.svg";
import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import { ConfigProvider, Segmented } from "antd";
import Image from "next/image";

const Closet = () => {
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
            options={["Active", "Reserved", "Hidden", "Drafts", "Sold"]}
            onChange={(value) => {
              console.log(value); // string
            }}
          />
        </ConfigProvider>
      </section>

      {/* content body */}
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
          Sell your used clothes effortlessly, earning cash without hidden fees.
        </p>
        <div className="flex justify-center ">
          <FillButton className=" uppercase">Sell Now</FillButton>
        </div>
      </section>
    </div>
  );
};

export default Closet;
