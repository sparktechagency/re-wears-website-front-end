"use client";

import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rate } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const Reviews = () => {
  const [value, setValue] = useState(3);

  return (
    <div className="grid gap-6 font-poppins">
      <section className="flex flex-col lg:flex-row gap-6 items-center text-base py-4">
        <h1 className="text-7xl font-medium text-black">4.0</h1>
        <div className="">
          <Rate defaultValue={value} style={{ color: "#FDB11A" }} />
          <p className="text-[#797979] font-medium">20 reviews</p>
        </div>
      </section>

      <section>
        <ul className="grid gap-4">
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <FaCircleUser size={40} className="text-[#797979]" />
              </span>
              <div>
                <Label className="text-lg !py-0">re-wears</Label>
                <p>
                  “Ullamcorper odio morbi vel pretium elementum risus. Habitant
                  arcu in risus tortor. Scelerisque.”
                </p>
              </div>
            </div>

            <p className="text-[#797979] font-medium">2 weeks ago</p>
          </li>
        </ul>
      </section>

      <section className="flex justify-center">
        <OutlineButton className="uppercase">Load More</OutlineButton>
      </section>
    </div>
  );
};

export default Reviews;
