"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/config/env-config";
import Chat from "./Chat";
import { useGetSearchParams } from "@/helpers/getSearchParams";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

const Inbox = ({ rooms }: { rooms: any }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const updateSearchParams = useUpdateSearchParams();
  const { recipient: partnerId } = useGetSearchParams();

  const handleMessage = (room: any) => {
    setIsChatVisible(true);
    updateSearchParams({
      recipient: room?.participants?.[0]?._id,
      room: room?._id,
    });
  };

  // set the first chat to visible if there are rooms available
  useEffect(() => {
    if (rooms?.length > 0 && !partnerId) {
      setIsChatVisible(true);
      updateSearchParams({
        recipient: rooms?.[0]?.participants?.[0]?._id,
        room: rooms?.[0]?._id,
      });
    }
  }, []);

  return (
    <div className=" lg:py-[50px] py-[20px]  bg-[#FDFDFD]">
      <div className="container mt-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Message List */}
          <div
            className={`lg:col-span-4 col-span-12 bg-white  rounded-xl px-2 py-4   overflow-y-auto ${
              isChatVisible ? "hidden lg:block" : ""
            }`}
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
            }}
          >
            {/* search  */}
            <div
              className="mx-auto"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <p className="text-secondary text-[18px] font-bold px-4">Inbox</p>
            </div>

            <div className="flex flex-col gap-1 lg:h-auto h-[calc(82vh)] overflow-y-scroll no-scrollbar">
              {rooms?.map((room: any, index: number) => (
                <div key={index} onClick={() => handleMessage(room)}>
                  <div
                    className={`flex justify-between  px-4 py-3 rounded-lg mb-2 cursor-pointer ${
                      partnerId === room?.participants?.[0]?._id
                        ? "bg-[#ECECEC]"
                        : "bg-[#F8F8F8]"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {room?.participants?.map((person: any, index: number) => (
                        <Image
                          key={index}
                          src={
                            person?.image?.includes("http")
                              ? person?.image
                              : `${IMAGE_URL}${person?.image}`
                          }
                          alt=""
                          width={60}
                          height={60}
                          className="rounded-full h-[50px] w-[50px]"
                        />
                      ))}

                      <div className="flex-col gap-1">
                        <p className="text-[16px] text-secondary font-bold">
                          {room?.participants
                            ?.map(
                              (person: any) =>
                                `${person?.firstName} ${person?.lastName}`
                            )
                            .join(", ")}
                        </p>
                        <p className="text-[#6A6A6A] text-[14px]">
                          {room?.lastMessage?.text}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#6A6A6A] text-[15px]">
                      {room?.lastMessage?.createdAt
                        ? new Date(
                            room?.lastMessage?.createdAt
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div
            className={`lg:col-span-8 col-span-12 bg-white  rounded-xl p-2 ${
              isChatVisible ? "block" : "hidden lg:block"
            }`}
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
            }}
          >
            <Chat setIsChatVisible={setIsChatVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inbox;
