"use client";
import FillButton from "@/components/shared/FillButton";
import { ConfigProvider, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MapPin } from "lucide-react";
import React, { useState } from "react";

const LeaveReview = () => {
  const [rating, setRating] = useState(2);
  const [open, setOpen] = useState(false); 

  const SuccessModal = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {  
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
            Your feedback helps us create a better <span className="font-semibold">re-wears</span> experience for everyone. We appreciate you being part of our community.
          </p> 
          <FillButton className="uppercase w-full mx-auto">
            Continue browsing
          </FillButton>
        </div>
      </Modal>
    );
  };

  return (
    <div className=" container lg:pt-[50px] pt-6 pb-[100px]">
      <p className=" text-secondary lg:text-[25px] text-[22px] font-bold flex items-center justify-center pb-6">
        {" "}
        Leave a review{" "}
      </p>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-[900px] card">
          <div className="space-y-6">
            {/* seller */}
            <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-4 border-b border-[#DCDCDC] pb-8">
              <div className="text-[16px] font-bold text-secondary">Seller</div>

              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
                    A
                  </div>
                  <div className="font-bold">agrickaby</div>
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
                        defaultValue={5}
                        className="text-[12px] text-[#E6A817]"
                      />
                    </ConfigProvider>
                    <span className="text-secondary text-sm">317 reviews</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary text-sm">
                    <MapPin size={14} />
                    <span>Colorado Beach, VA, United States</span>
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
        <button className="bg-primary text-white font-normal  lg:text-[16px] text-[14 px] rounded-full px-10 py-3" onClick={() => setOpen(true)}>
          {" "}
          SUBMIT{" "}
        </button>
      </div> 
 <SuccessModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default LeaveReview;
