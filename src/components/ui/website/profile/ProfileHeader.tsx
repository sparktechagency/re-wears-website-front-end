"use client";

import Accordian from "@/components/shared/Accordian";
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
      <div className=" flex flex-col lg:flex-row gap-6">
        <div className="size-28 flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
          M
        </div>

        {/* info */}
        <div className="flex-1">
          <Label className="text-xl">@mykola888</Label>
          <div className="flex items-center gap-4">
            <Rate
              disabled
              onChange={setValue}
              value={value}
              style={{ color: "#FDB11A" }}
            />
            <span className="text-[#797979]">20 reviews</span>
          </div>
          <div className="flex justify-between lg:justify-start gap-6 mt-4">
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
          <p className="flex items-center gap-3">
            <HiMapPin className="text-primary size-6" />{" "}
            <span>Colonian Beach, VA, United States</span>
          </p>
          <p className="flex items-center gap-3">
            <FaClock className="text-primary size-5" />{" "}
            <span>Last seen 10 hours ago</span>
          </p>
        </div>

        {/* verified info */}
        <div className="flex flex-col gap-3 bg-[#F5F5F5] p-5 rounded-xl">
          <p className="text-[#797979] flex items-center gap-2">
            Verified info <BsPatchCheckFill className="text-[#1976D2]" />
          </p>
          <p className="flex items-center gap-3">
            <FaCircleCheck className="text-primary size-5" /> <span>Email</span>
          </p>
        </div>

        {/* action button */}
        <div className="flex flex-row lg:flex-col gap-4">
          {/* <OutlineButton className="flex justify-center items-center gap-2">
            <IoMail size={20} /> Message
          </OutlineButton>
          <FillButton>Follow</FillButton> */}
          <Link href={"/settings/account-settings"}>
            <OutlineButton className="flex justify-center items-center gap-2">
              <Pencil size={20} /> Edit Profile
            </OutlineButton>
          </Link>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <Accordian
          title="clothes/ shoes that have been laying around for a while just want to get rid of and make space..."
          text="clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space clothes/ shoes that have been laying around for a while just want to get rid of and make space"
        />
      </div>
    </section>
  );
};

export default ProfileHeader;
