"use client";

import FillButton from "@/components/shared/FillButton";
import { IMAGE_URL } from "@/config/env-config";
import { myFetch } from "@/helpers/myFetch";
import { ConfigProvider, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LeaveReview = ({ userData }: { userData: any }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleReview = async () => {
    const payload = {
      user: userData?.user?._id,
      rating,
      message,
    };

    try {
      const res = await myFetch("/review", { method: "POST", body: payload });
      if (res?.success) {
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SuccessModal = ({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: (open: boolean) => void;
  }) => {
    return (
      <Modal
        open={open}
        centered
        onCancel={() => setOpen(false)}
        footer={null}
        width={470}
      >
        <div className="flex flex-col gap-y-5">
          <p className="text-center font-bold text-[22px] text-[#000000]">
            Thank you for your review!
          </p>
          <p className="text-[16px] font-normal text-[#797979]">
            Your feedback helps us create a better
            <span className="font-semibold">re-wears</span> experience for
            everyone. We appreciate you being part of our community.
          </p>
          <Link href={"/"}>
            <FillButton className="uppercase w-full mx-auto">
              Continue browsing
            </FillButton>
          </Link>
        </div>
      </Modal>
    );
  };

  return (
    <div className=" container lg:pt-[50px] pt-6 pb-[100px]">
      <p className=" text-secondary lg:text-[25px] text-[22px] font-bold flex items-center justify-center pb-6">
        Leave a review
      </p>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-[900px] card">
          <div className="space-y-6">
            {/* seller */}
            <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-4 border-b border-[#DCDCDC] pb-8">
              <div className="text-[16px] font-bold text-secondary">Seller</div>

              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-3">
                  {userData?.user?.image ? (
                    <Image
                      src={
                        userData?.user?.image?.includes("http")
                          ? userData?.user?.image
                          : `${IMAGE_URL}${userData?.user?.image}`
                      }
                      alt="profile-image"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
                      A
                    </div>
                  )}

                  <div className="font-bold">
                    {`@${userData?.user?.userName}` || "Unknown"}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ConfigProvider
                      theme={{
                        components: {
                          Rate: {
                            starColor: "#E6A817",
                          },
                        },
                      }}
                    >
                      <Rate
                        disabled
                        defaultValue={userData?.customerAvgRating || 0}
                        className="text-[12px] text-[#E6A817]"
                      />
                    </ConfigProvider>
                    <span className="text-secondary text-sm">
                      {userData?.reviewCount || 0} reviews
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary text-sm">
                    <MapPin size={14} />
                    <span>{userData?.user?.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* rating */}
            <div className=" flex lg:flex-row flex-col lg:items-center justify-between border-b border-[#DCDCDC] pt-5 pb-10">
              <p className="text-[16px] font-bold text-secondary lg:w-1/2 lg:mb-0 mb-3">
                Rate your experience
              </p>
              <div className="lg:w-1/2">
                <ConfigProvider
                  theme={{
                    components: {
                      Rate: {
                        starColor: "#E6A817",
                      },
                    },
                  }}
                >
                  <Rate value={rating} onChange={setRating} />
                </ConfigProvider>
              </div>
            </div>

            {/* review section */}
            <div className="space-y-2  flex lg:flex-row flex-col lg:items-center justify-between ">
              <p className=" text-[16px] font-bold text-secondary lg:mb-0 mb-3">
                Share your thoughts
              </p>
              <div className="lg:w-1/2">
                <TextArea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. fast response time, item as described"
                  className="w-full"
                  rows={4}
                  style={{
                    resize: "none",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "22px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button
          className="bg-primary text-white font-normal lg:text-[16px] text-[14 px] rounded-full px-10 py-3"
          onClick={() => handleReview()}
        >
          SUBMIT
        </button>
      </div>
      <SuccessModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default LeaveReview;
