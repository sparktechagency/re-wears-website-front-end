"use client";

import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
import { Rate } from "antd";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";

const ProfileHeader = () => {
  const [value, setValue] = useState(3);

  return (
    <section className="card">
      <div className=" flex flex-col lg:flex-row lg:gap-6 gap-2">
        <div className="flex flex-row gap-4 lg:gap-6 items-center lg:items-start">
          <div className="lg:size-28 size-[69px] flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
            M
          </div>

          <div className="lg:hidden block">
            <Label className="text-[16px] pb-2">@mykola888</Label>
            <div className="flex items-center gap-4">
              <Rate
                disabled
                onChange={setValue}
                value={value}
                style={{ color: "#FDB11A" }}
              />
              <span className="text-[#797979] text-[14px]">20 reviews</span>
            </div>
          </div>
        </div>

        {/* info */}
        <div className="flex-1">
          <div className="hidden lg:block ">
            <Label className="text-xl lg:block hidden">@mykola888</Label>
            <div className="flex items-center gap-4 ">
              <Rate
                disabled
                onChange={setValue}
                value={value}
                style={{ color: "#FDB11A" }}
              />
              <span className="text-[#797979]">20 reviews</span>
            </div>
          </div>
          <div className="flex  gap-8 lg:justify-start lg:gap-6 lg:mt-4">
            <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0">
              <Label className="text-3xl text-primary">20</Label>
              <p className="text-[#797979]">Followers</p>
            </div>
            <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0">
              <Label className="text-3xl text-primary">23</Label>
              <p className="text-[#797979]">Following</p>
            </div>
          </div>
        </div>

        {/* about */}
        <div className="grid gap-3 bg-[#F5F5F5] p-5 rounded-xl">
          <p className="text-[#797979]">About</p>
          <p className="flex items-center gap-2">
            <HiMapPin className="text-primary size-6" />{" "}
            <span className="text-[12px] lg:text-[14px]">
              Colonian Beach, VA, United States
            </span>
          </p>
          <p className="flex items-center gap-3">
            <FaClock className="text-primary size-5" />{" "}
            <span className="text-[12px] lg:text-[14px]">
              Last seen 10 hours ago
            </span>
          </p>
        </div>

        {/* verified info */}
        <div className="flex flex-col gap-3 bg-[#F5F5F5] p-5 rounded-xl">
          <p className="text-[#797979] flex items-center gap-2">
            Verified info <BsPatchCheckFill className="text-[#1976D2]" />
          </p>
          <p className="flex items-center gap-3">
            <FaCircleCheck className="text-primary size-5" />{" "}
            <span className="text-[12px] lg:text-[14px]">Email</span>
          </p>
        </div>

        {/* action button */}
        <div className="flex flex-row lg:flex-col gap-4">
          {/* <OutlineButton className="flex justify-center items-center gap-2">
            <IoMail size={20} /> Message
          </OutlineButton>
          <FillButton>Follow</FillButton> */}
          <Link href={"/settings/profile-details"}>
            <OutlineButton className="flex justify-center items-center gap-2">
              <Pencil size={20} /> Edit Profile
            </OutlineButton>
          </Link>
        </div>
      </div>
      {/* <div className="max-w-screen-lg mx-auto">
        <Accordian
          title="clothes/ shoes that have been laying around for a while just want to get rid of and make space..."
          text="clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space"
        />
      </div> */}
    </section>
  );
};

export default ProfileHeader;
