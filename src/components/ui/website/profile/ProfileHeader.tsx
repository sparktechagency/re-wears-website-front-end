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
import { formatDistanceToNow } from "date-fns"
import { IoMail } from "react-icons/io5";
import FillButton from "@/components/shared/FillButton";
import { myFetch } from "@/helpers/myFetch";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { revalidateTags } from "@/helpers/revalidateTags";

const ProfileHeader = ({
  user, // user is the user data fetched from the server
  myId, // myId is the ID of the logged-in user
  followRes,
}: {
  user: any;
  myId: string;
  followRes: any;
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [lastSeenAt, setLastSeenAt] = useState<string | null>(null);

  // Update last seen time every minute
  useEffect(() => {
    const updateTime = () => {
      if (user?.user?.lastSeenAt) {
        setLastSeenAt(
          formatDistanceToNow(new Date(user?.user?.lastSeenAt), {
            addSuffix: true,
          })
        );
      } else {
        setLastSeenAt("Unknown");
      }
    };
    updateTime(); // initial
    const interval = setInterval(updateTime, 60000); // every minute
    return () => clearInterval(interval);
  }, [user?.user?.lastSeenAt]);

  // Handle follow/unfollow action
  const handleFollow = async () => {
    try {
      const res = await myFetch(`/user/${user?.user?._id}`, {
        method: "PATCH",
      });

      if (res.success && res?.data?.follower?.includes(myId)) {
        revalidateTags(["Profile"]);
        setIsFollowing(true);
        toast.success("Followed Successfully");
      } else {
        revalidateTags(["Profile"]);
        setIsFollowing(false);
        toast.success("Unfollowed Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Check if the user is following or not
  useEffect(() => {
    if (followRes?.success && followRes?.data?.follower?.includes(myId)) {
      setIsFollowing(true);
    }
  }, [followRes, myId]);

  return (
    <section className="card">
      <div className=" flex flex-col lg:flex-row lg:gap-6 gap-2">
        <div className="flex flex-row gap-4 lg:gap-6 items-center lg:items-start">
          {user?.user?.image ? (
            <Image
              src={
                user.user.image.includes("http")
                  ? user.image
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
              {lastSeenAt}
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
          {myId === user?.user?._id ? (
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
