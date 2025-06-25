"use client";

import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
import { Rate } from "antd";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";
import { IMAGE_URL } from "@/config/env-config";
import { formatDistanceToNow } from "date-fns";
import { IoMail } from "react-icons/io5";
import FillButton from "@/components/shared/FillButton";
import { myFetch } from "@/helpers/myFetch";
import toast from "react-hot-toast";
import { useState } from "react";

const ProfileHeader = ({ user, userId }: { user: any; userId: string }) => {
  console.log("User data", user);
  const [isFollowing, setIsFollowing] = useState(false);
  let lastActiveStatus = "Unknown";
  const lastSeenAt = user?.user?.lastSeenAt;

  if (lastSeenAt && !isNaN(new Date(lastSeenAt).getTime())) {
    lastActiveStatus = formatDistanceToNow(new Date(lastSeenAt), {
      addSuffix: true,
    });
  }

  const handleFollow = async () => {
    try {
      console.log("Sending follow/unfollow request for user:", user?.user?._id);

      const response = await myFetch(`/review/${user?.user?._id}`, {
        method: "GET",
      });

      console.log("API Response:", response);

      if (response?.success) {
        setIsFollowing((prev) => !prev); // Toggle follow state
        toast.success(
          isFollowing ? "Unfollowed successfully" : "Followed successfully"
        );
        console.log(
          isFollowing ? "User has been unfollowed." : "User has been followed."
        );
      } else {
        toast.error(response?.message || "Failed to process follow action");
        console.error("Follow request failed:", response?.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error in follow/unfollow:", error);
    }
  };

  return (
    <section className="card">
      <div className=" flex flex-col lg:flex-row lg:gap-6 gap-2">
        <div className="flex flex-row gap-4 lg:gap-6 items-center lg:items-start">
          {user?.user?.image ? (
            <Image
              src={
                user.user.image.includes("http")
                  ? user.user.image
                  : `${IMAGE_URL}${user.user.image}`
              }
              alt="User image"
              width={112}
              height={112}
              className="object-cover rounded-full"
            />
          ) : (
            <div className="lg:size-28 size-[69px] flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
              {user.user.firstName.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="block lg:hidden">
            <Label className="text-[16px] pb-2">@{user?.userName}</Label>
            <div className="flex items-center gap-4">
              <Rate
                disabled
                value={user?.customerAvgRating}
                style={{ color: "#FDB11A" }}
              />
              <span className="text-[#797979] text-[14px]">
                {user?.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>

        {/* info */}
        <div className="flex-1">
          <div className="hidden lg:block ">
            <Label className="text-xl lg:block hidden">
              @{user?.user?.userName}
            </Label>
            <div className="flex items-center gap-4 ">
              <Rate
                disabled
                value={user?.customerAvgRating}
                style={{ color: "#FDB11A" }}
              />
              <span className="text-[#797979]">
                {user?.reviewCount} reviews
              </span>
            </div>
          </div>
          <div className="flex  gap-8 lg:justify-start lg:gap-6 lg:mt-4">
            <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0">
              <Label className="text-3xl text-primary">
                {user?.followersCount}
              </Label>
              <p className="text-[#797979]">Followers</p>
            </div>
            <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0">
              <Label className="text-3xl text-primary">
                {user?.followingCount}
              </Label>
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
              {user?.user?.location}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <FaClock className="text-primary size-5" />{" "}
            <span className="text-[12px] lg:text-[14px] capitalize">
              {lastActiveStatus}
            </span>
          </p>
        </div>

        {/* verified info */}
        <div className="flex flex-col gap-3 bg-[#F5F5F5] p-5 rounded-xl">
          <p className="text-[#797979] flex items-center gap-2">
            Verified info <BsPatchCheckFill className="text-[#1976D2]" />
          </p>
          <div>
            {user?.user?.isVerified && (
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-primary size-5" />{" "}
                <span className="text-[12px] lg:text-[14px]">Email</span>
              </p>
            )}
          </div>
        </div>

        {/* action button */}
        <div className="flex flex-row lg:flex-col gap-4">
          {userId === user?.user?._id ? (
            <Link href={"/settings/profile-details"}>
              <OutlineButton className="flex justify-center items-center gap-2">
                <Pencil size={20} /> Edit Profile
              </OutlineButton>
            </Link>
          ) : (
            <>
              <Link href={`/inbox?recipient=${user?.user?._id}`}>
                <OutlineButton className="flex justify-center items-center gap-2">
                  <IoMail size={20} /> Message
                </OutlineButton>
              </Link>
              <FillButton onClick={handleFollow}>
                {isFollowing ? "Unfollow" : "Follow"}
              </FillButton>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
